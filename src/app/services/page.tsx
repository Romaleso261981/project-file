
import ServiceIndex from '@/components/pages/services/service-index';
import ClientWrapper from '@/components/shared/client-wrapper'
import { Metadata } from 'next';
import React from 'react'

const baseUrl = 'https://project-file-woad.vercel.app';

export const metadata: Metadata = {
  title: "Услуги",
  description: "Профессиональные геодезические услуги SurveyRidge: строительные съемки, архитектурное планирование, проектирование участков и интерьерные решения.",
  keywords: ["геодезические услуги", "строительные съемки", "архитектура", "планирование проектов", "интерьер"],
  alternates: {
    canonical: `${baseUrl}/services/`,
  },
  openGraph: {
    title: "Услуги - SurveyRidge",
    description: "Профессиональные геодезические услуги: строительство, архитектура, планирование проектов.",
    url: `${baseUrl}/services/`,
  },
};

export default function Research() {
    return (
        <ClientWrapper>
            <ServiceIndex />
        </ClientWrapper>
    )
}