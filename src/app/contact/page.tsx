
import ContactIndex from '@/components/pages/contact/contact-index';
import ClientWrapper from '@/components/shared/client-wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Contact - SurveyRidge",
};

export default function Contact() {
    return (
        <ClientWrapper>
            <ContactIndex />
        </ClientWrapper>
    )
}