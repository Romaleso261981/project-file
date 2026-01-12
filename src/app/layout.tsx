import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Favicon from '../.././public/images/logo/favicon.png'

// Load Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Load Space Grotesk
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "SurveyRidge - Шаблон сайта геодезистов недвижимости Next.js",
  description: "Шаблон сайта геодезистов недвижимости Next.js – SurveyRidge упрощает создание сайтов для геодезических фирм. Создайте профессиональный сайт недвижимости легко уже сегодня.",
  robots: "index, follow",
	icons: {
		icon: Favicon.src
	},
	openGraph: {
		title: "SurveyRidge - Шаблон сайта геодезистов недвижимости Next.js",
		description: "Шаблон сайта геодезистов недвижимости Next.js – SurveyRidge упрощает создание сайтов для геодезических фирм. Создайте профессиональный сайт недвижимости легко уже сегодня.",
		url: "https://designtocodes.com/product/surveyridge-property-surveyors-next-js-website-template",
		images: [
			{
				url: "https://designtocodes.com/wp-content/uploads/2025/10/SurveyRidge-Property-Surveyors-Nextjs-Website-Template-Thumbnail.jpg",
			},
		],
	}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
