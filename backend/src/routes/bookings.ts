import { Router } from 'express';
import db from '../db/database.js';
import { sendMessage, notifyStaff } from '../utils/maxApi.js';

const router = Router();

router.post('/', (req, res) => {
  try {
    const { name, phone, date, time, guests, notes, user_chat_id } = req.body;

    if (!name || !phone || !date || !time || !guests) {
      return res.status(400).json({ error: 'Неверные данные бронирования' });
    }

    const stmt = db.prepare(`
      INSERT INTO bookings (name, phone, date, time, guests, notes, user_chat_id)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(name, phone, date, time, guests, notes || '', user_chat_id || null);

    // Подтверждение пользователю
    if (user_chat_id) {
      const userText = `Бронь принята!\n${date}, ${time}\n${guests} ${guests === 1 ? 'гость' : guests < 5 ? 'гостя' : 'гостей'}\n\nЖдём вас в Stephania!`;
      sendMessage(user_chat_id, userText).catch(console.error);
    }

    // Уведомление персоналу
    const staffText = `Новая бронь
Имя: ${name}
Телефон: ${phone}
Дата: ${date}, ${time}
Гостей: ${guests}
${notes ? `Пожелания: ${notes}` : ''}`;

    notifyStaff(staffText).catch(console.error);

    res.json({ success: true });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ error: 'Ошибка при бронировании' });
  }
});

export default router;
