import AboutIndex from '@/components/pages/about/about-index';
import ClientWrapper from '@/components/shared/client-wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "About - SurveyRidge",
};

export default function About() {
    return (
        <ClientWrapper>
            <AboutIndex />
        </ClientWrapper>
    )
}