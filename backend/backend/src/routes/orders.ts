import { Router } from 'express';
import db from '../db/database.js';
import { sendMessage, notifyStaff } from '../utils/maxApi.js';

const router = Router();

router.post('/', (req, res) => {
  try {
    const { table_number, comment, items, total, user_chat_id } = req.body;

    if (!table_number || !items || !Array.isArray(items) || items.length === 0 || typeof total !== 'number') {
      return res.status(400).json({ error: 'Неверные данные заказа' });
    }

    const stmt = db.prepare(`
      INSERT INTO orders (table_number, comment, items, total, user_chat_id)
      VALUES (?, ?, ?, ?, ?)
    `);

    const result = stmt.run(table_number, comment || '', JSON.stringify(items), total, user_chat_id || null);
    const orderId = result.lastInsertRowid as number;

    // Подтверждение пользователю
    if (user_chat_id) {
      const userText = `Заказ #${orderId} принят!\nСтол: ${table_number}\nИтого: ${total} ₽\n\nОжидайте, официант подойдёт для подтверждения.`;
      sendMessage(user_chat_id, userText).catch(console.error);
    }

    // Уведомление персоналу
    const itemsText = items
      .map((i: { name: string; quantity: number; price: number }) => `${i.name} x${i.quantity} — ${i.price * i.quantity} руб`)
      .join('\n');
    const staffText = `Новый заказ #${orderId}
Стол: ${table_number}
${itemsText}
Итого: ${total} руб
${comment ? `Комментарий: ${comment}` : ''}
Клиент: ${user_chat_id || 'не указан'}`;

    notifyStaff(staffText).catch(console.error);

    res.json({ order_id: orderId });
  } catch (err) {
    console.error('Order error:', err);
    res.status(500).json({ error: 'Ошибка при создании заказа' });
  }
});

export default router;
