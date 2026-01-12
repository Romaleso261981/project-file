This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Telegram Bot Integration

Проект інтегровано з Telegram ботом для отримання замовлень з форми контакту.

### Налаштування Telegram бота:

1. **Створіть файл `.env.local`** в корені проекту:
```bash
TELEGRAM_BOT_TOKEN=8555898660:AAGACcEFsN5akhBXgtBUowjscQpZl28CMJ8
TELEGRAM_CHAT_ID=ваш_chat_id
```

2. **Отримання Chat ID:**
   - Варіант 1: Надішліть будь-яке повідомлення вашому боту в Telegram, система спробує автоматично отримати chat_id
   - Варіант 2: Відкрийте в браузері: `https://api.telegram.org/bot8555898660:AAGACcEFsN5akhBXgtBUowjscQpZl28CMJ8/getUpdates`
   - Знайдіть `"chat":{"id":123456789}` - це ваш chat_id
   - Скопіюйте число і вставте в `TELEGRAM_CHAT_ID`

3. **Перезапустіть сервер розробки** після додавання змінних оточення.

### Як це працює:

- Коли користувач заповнює форму контакту на сайті, дані відправляються на API endpoint `/api/telegram`
- API формує красиве повідомлення з даними замовлення і відправляє його в Telegram
- Ви отримуєте повідомлення з усіма деталями замовлення

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Важливо:** При деплої на Vercel додайте змінні оточення `TELEGRAM_BOT_TOKEN` та `TELEGRAM_CHAT_ID` в налаштуваннях проекту.
