import HomeIndex from "@/components/pages/home/home-index";
import ClientWrapper from "@/components/shared/client-wrapper";
import { Metadata } from "next";

const baseUrl = 'https://project-file-woad.vercel.app';

export const metadata: Metadata = {
  title: "Главная",
  description: "SurveyRidge - профессиональные геодезические услуги, земельные съемки и топографическое картирование. Опытная команда лицензированных геодезистов для ваших проектов.",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "SurveyRidge - Профессиональные геодезические услуги",
    description: "Профессиональные геодезические услуги, земельные съемки и топографическое картирование.",
    url: baseUrl,
  },
};

export default function Home() {
	return (
		<ClientWrapper>
			<HomeIndex />
		</ClientWrapper>
	);
}
