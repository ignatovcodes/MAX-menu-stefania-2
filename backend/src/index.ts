import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import ordersRouter from './routes/orders.js';
import bookingsRouter from './routes/bookings.js';
import waiterRouter from './routes/waiter.js';
import { handleBotCommand } from './bot.js';

const app = express();
const PORT = process.env.PORT || 3001;

const WEBAPP_ORIGIN = process.env.WEBAPP_URL || 'http://localhost:5173';

app.use(cors({
  origin: [
    WEBAPP_ORIGIN,
    'https://max-menu-stefania.vercel.app',
    /^https:\/\/max-menu-stefania\.vercel\.app(\/.*)?$/,
    /^https?:\/\/localhost(:\d+)?$/,
    /^https?:\/\/127\.0\.0\.1(:\d+)?$/,
  ],
  credentials: true,
}));

app.use(express.json());

// API routes
app.use('/api/orders', ordersRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/waiter', waiterRouter);

// Webhook для MAX Bot (если настроен)
app.post('/api/webhook', express.json(), async (req, res) => {
  try {
    const body = req.body;
    const chatId = body?.payload?.chat?.chatId ?? body?.chat_id ?? body?.chatId;
    const text = body?.payload?.text ?? body?.text ?? body?.message?.text;

    if (chatId && text) {
      await handleBotCommand(String(chatId), String(text));
    }

    res.status(200).send('OK');
  } catch (err) {
    console.error('Webhook error:', err);
    res.status(500).send('Error');
  }
});

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Stephania backend running on port ${PORT}`);
  console.log(`WebApp URL: ${WEBAPP_ORIGIN}`);
  if (!process.env.BOT_TOKEN) {
    console.warn('BOT_TOKEN not set — add it to .env');
  }
  if (!process.env.STAFF_CHAT_ID) {
    console.warn('STAFF_CHAT_ID not set — staff notifications disabled');
  }
});
