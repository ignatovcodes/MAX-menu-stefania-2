/**
 * MAX Bot — обработка входящих сообщений (webhook или long polling)
 * По команде /start отправляем приветствие и кнопку WebApp
 *
 * MAX Bot API: https://max.im/botapi
 * Endpoint для отправки: POST https://api.max.im/messages
 *
 * Для приёма сообщений боту нужен webhook или long polling.
 * Настройте webhook в настройках бота на MAX.
 * URL webhook: https://your-domain.com/api/webhook
 */

import { sendMessage } from './utils/maxApi.js';

const WEBAPP_URL = process.env.WEBAPP_URL || 'http://localhost:5173';

export async function handleBotCommand(chatId: string, text: string): Promise<void> {
  const trimmed = text.trim().toLowerCase();

  if (trimmed === '/start') {
    const webappLink = `${WEBAPP_URL}?chat_id=${encodeURIComponent(chatId)}`;
    const welcomeText = `Добро пожаловать в ресторан Stephania! 

Здесь вы можете:
🍽 Просмотреть меню и оформить заказ
📅 Забронировать стол
👋 Вызвать официанта

Откройте приложение:
${webappLink}`;

    await sendMessage(chatId, welcomeText);
  }
}
