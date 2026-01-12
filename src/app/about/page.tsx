import AboutIndex from '@/components/pages/about/about-index';
import ClientWrapper from '@/components/shared/client-wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "О нас - SurveyRidge",
};

export default function About() {
    return (
        <ClientWrapper>
            <AboutIndex />
        </ClientWrapper>
    )
}