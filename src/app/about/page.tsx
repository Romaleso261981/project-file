import AboutIndex from '@/components/pages/about/about-index';
import ClientWrapper from '@/components/shared/client-wrapper'
import { Metadata } from 'next';
import React from 'react'

const baseUrl = 'https://project-file-woad.vercel.app';

export const metadata: Metadata = {
  title: "О нас",
  description: "Узнайте больше о SurveyRidge - команде опытных лицензированных геодезистов, предоставляющих профессиональные услуги по земельным съемкам и топографическому картированию.",
  keywords: ["о компании", "команда геодезистов", "опыт работы", "лицензированные геодезисты"],
  alternates: {
    canonical: `${baseUrl}/about/`,
  },
  openGraph: {
    title: "О нас - SurveyRidge",
    description: "Узнайте больше о SurveyRidge - команде опытных лицензированных геодезистов.",
    url: `${baseUrl}/about/`,
  },
};

export default function About() {
    return (
        <ClientWrapper>
            <AboutIndex />
        </ClientWrapper>
    )
}