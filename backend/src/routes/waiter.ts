import { Router } from 'express';
import db from '../db/database.js';
import { notifyStaff } from '../utils/maxApi.js';

const router = Router();

router.post('/', (req, res) => {
  try {
    const { table_number, comment, user_chat_id } = req.body;

    if (!table_number) {
      return res.status(400).json({ error: 'Укажите номер стола' });
    }

    const stmt = db.prepare(`
      INSERT INTO waiter_calls (table_number, comment, user_chat_id)
      VALUES (?, ?, ?)
    `);

    stmt.run(table_number, comment || '', user_chat_id || null);

    // Уведомление персоналу
    const staffText = `Вызов официанта
Стол: ${table_number}
Комментарий: ${comment || '—'}`;

    notifyStaff(staffText).catch(console.error);

    res.json({ success: true });
  } catch (err) {
    console.error('Waiter call error:', err);
    res.status(500).json({ error: 'Ошибка при вызове официанта' });
  }
});

export default router;
