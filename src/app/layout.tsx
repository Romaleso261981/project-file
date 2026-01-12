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
  title: "SurveyRidge - Property Surveyors Next.js Website Template",
  description: "Property surveyors nextjs template – SurveyRidge simplifies website creation for survey firms. Build a professional property site easily today.",
  robots: "index, follow",
	icons: {
		icon: Favicon.src
	},
	openGraph: {
		title: "SurveyRidge - Property Surveyors Next.js Website Template",
		description: "Property surveyors nextjs template – SurveyRidge simplifies website creation for survey firms. Build a professional property site easily today.",
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
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
