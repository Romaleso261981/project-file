
import ServiceIndex from '@/components/pages/services/service-index';
import ClientWrapper from '@/components/shared/client-wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Услуги - SurveyRidge",
};

export default function Research() {
    return (
        <ClientWrapper>
            <ServiceIndex />
        </ClientWrapper>
    )
}