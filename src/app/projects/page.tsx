

import ProjectIndex from '@/components/pages/projects/project-index';
import ClientWrapper from '@/components/shared/client-wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Проекты - SurveyRidge",
};

export default function Projects() {
    return (
        <ClientWrapper>
            <ProjectIndex />
        </ClientWrapper>
    )
}