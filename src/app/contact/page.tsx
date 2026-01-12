
import ContactIndex from '@/components/pages/contact/contact-index';
import ClientWrapper from '@/components/shared/client-wrapper'
import { Metadata } from 'next';
import React from 'react'

const baseUrl = 'https://project-file-woad.vercel.app';

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с SurveyRidge для получения профессиональных геодезических услуг. Телефон, email и адрес офиса. Заполните форму обратной связи для консультации.",
  keywords: ["контакты", "связаться", "геодезические услуги", "консультация", "записаться"],
  alternates: {
    canonical: `${baseUrl}/contact/`,
  },
  openGraph: {
    title: "Контакты - SurveyRidge",
    description: "Свяжитесь с SurveyRidge для получения профессиональных геодезических услуг.",
    url: `${baseUrl}/contact/`,
  },
};

export default function Contact() {
    return (
        <ClientWrapper>
            <ContactIndex />
        </ClientWrapper>
    )
}