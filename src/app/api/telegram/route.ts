import { NextRequest, NextResponse } from 'next/server';

// const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';

const TELEGRAM_BOT_TOKEN = "8555898660:AAGACcEFsN5akhBXgtBUowjscQpZl28CMJ8"
const TELEGRAM_CHAT_ID = "6220290929"

// Функція для отримання chat_id через getUpdates
async function getChatId(): Promise<string | null> {
  try {
    const updatesUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`;
    const response = await fetch(updatesUrl);
    const data = await response.json();
    
    if (data.ok && data.result && data.result.length > 0) {
      // Отримуємо останнє повідомлення
      const lastUpdate = data.result[data.result.length - 1];
      if (lastUpdate.message && lastUpdate.message.chat) {
        return lastUpdate.message.chat.id.toString();
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting chat_id:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Перевірка наявності токену бота
    if (!TELEGRAM_BOT_TOKEN) {
      return NextResponse.json(
        { error: 'TELEGRAM_BOT_TOKEN не налаштовано. Будь ласка, додайте токен у файл .env.local' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Валідація даних
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Всі обов\'язкові поля повинні бути заповнені' },
        { status: 400 }
      );
    }

    // Формуємо повідомлення для Telegram
    const telegramMessage = `
🆕 <b>Нове замовлення з сайту</b>

👤 <b>Ім'я:</b> ${name}
📧 <b>Email:</b> ${email}
📱 <b>Телефон:</b> ${phone}
${service ? `🔧 <b>Послуга:</b> ${service}` : ''}

💬 <b>Повідомлення:</b>
${message}

⏰ <b>Дата:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
    `.trim();

    // Отримуємо chat_id
    let chatId = TELEGRAM_CHAT_ID;
    
    // Якщо chat_id не вказано або не працює, спробуємо отримати через getUpdates
    if (!chatId) {
      chatId = await getChatId() || '';
    }

    // Функція для відправки повідомлення
    const sendMessage = async (targetChatId: string) => {
      const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      
      const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: targetChatId,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      });

      return await response.json();
    };

    // Спробуємо відправити з вказаним chat_id
    if (chatId) {
      const data = await sendMessage(chatId);
      
      // Якщо помилка "chat not found", спробуємо отримати актуальний chat_id
      if (!data.ok && data.description?.includes('chat not found')) {
        console.log('Chat ID не знайдено, спробуємо отримати через getUpdates...');
        chatId = await getChatId() || '';
        
        if (chatId) {
          const retryData = await sendMessage(chatId);
          if (!retryData.ok) {
            console.error('Telegram API error:', retryData);
            return NextResponse.json(
              { error: 'Помилка відправки повідомлення в Telegram', details: retryData.description },
              { status: 500 }
            );
          }
        } else {
          return NextResponse.json(
            { error: 'Chat ID не знайдено. Будь ласка, надішліть будь-яке повідомлення боту в Telegram, щоб він міг отримати ваш chat_id.' },
            { status: 400 }
          );
        }
      } else if (!data.ok) {
        console.error('Telegram API error:', data);
        return NextResponse.json(
          { error: 'Помилка відправки повідомлення в Telegram', details: data.description },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { error: 'Chat ID не знайдено. Будь ласка, надішліть будь-яке повідомлення боту в Telegram, щоб він міг отримати ваш chat_id.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Повідомлення успішно відправлено' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return NextResponse.json(
      { error: 'Внутрішня помилка сервера' },
      { status: 500 }
    );
  }
}
