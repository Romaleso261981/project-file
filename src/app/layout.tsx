import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Favicon from '../.././public/images/logo/favicon.png'
import StructuredData from "@/components/shared/structured-data";

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

const baseUrl = 'https://project-file-woad.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "SurveyRidge - Профессиональные геодезические услуги",
    template: "%s | SurveyRidge"
  },
  description: "SurveyRidge предоставляет профессиональные геодезические услуги, земельные съемки, топографическое картирование и планирование участков. Опытная команда лицензированных геодезистов для ваших проектов.",
  keywords: ["геодезия", "земельные съемки", "топографическая съемка", "межевание", "планирование участка", "геодезические услуги", "строительная съемка"],
  authors: [{ name: "SurveyRidge" }],
  creator: "SurveyRidge",
  publisher: "SurveyRidge",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: Favicon.src,
    shortcut: Favicon.src,
    apple: Favicon.src,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: baseUrl,
    siteName: "SurveyRidge",
    title: "SurveyRidge - Профессиональные геодезические услуги",
    description: "SurveyRidge предоставляет профессиональные геодезические услуги, земельные съемки и топографическое картирование.",
    images: [
      {
        url: `${baseUrl}/images/logo/logo.svg`,
        width: 1200,
        height: 630,
        alt: "SurveyRidge - Геодезические услуги",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SurveyRidge - Профессиональные геодезические услуги",
    description: "SurveyRidge предоставляет профессиональные геодезические услуги, земельные съемки и топографическое картирование.",
    images: [`${baseUrl}/images/logo/logo.svg`],
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Додайте коди верифікації для Google Search Console та Yandex Webmaster
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
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
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        {children}
      </body>
    </html>
  );
}
