const MAX_API = 'https://api.max.im';

export async function sendMessage(chatId: string, text: string): Promise<boolean> {
  const token = process.env.BOT_TOKEN;
  if (!token) {
    console.error('BOT_TOKEN is not set');
    return false;
  }

  try {
    const response = await fetch(`${MAX_API}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('MAX API error:', response.status, errText);
      return false;
    }

    return true;
  } catch (err) {
    console.error('Failed to send MAX message:', err);
    return false;
  }
}

export function notifyStaff(text: string): Promise<boolean> {
  const staffChatId = process.env.STAFF_CHAT_ID;
  if (!staffChatId) {
    console.warn('STAFF_CHAT_ID is not set, skipping staff notification');
    return Promise.resolve(false);
  }
  return sendMessage(staffChatId, text);
}
