

import ProjectIndex from '@/components/pages/projects/project-index';
import ClientWrapper from '@/components/shared/client-wrapper'
import { Metadata } from 'next';
import React from 'react'

const baseUrl = 'https://project-file-woad.vercel.app';

export const metadata: Metadata = {
  title: "Проекты",
  description: "Посмотрите выполненные проекты SurveyRidge: планировка участков, дренажные системы, топографические съемки и другие геодезические работы.",
  keywords: ["выполненные проекты", "портфолио", "геодезические проекты", "примеры работ"],
  alternates: {
    canonical: `${baseUrl}/projects/`,
  },
  openGraph: {
    title: "Проекты - SurveyRidge",
    description: "Посмотрите выполненные проекты SurveyRidge по геодезии и земельным съемкам.",
    url: `${baseUrl}/projects/`,
  },
};

export default function Projects() {
    return (
        <ClientWrapper>
            <ProjectIndex />
        </ClientWrapper>
    )
}