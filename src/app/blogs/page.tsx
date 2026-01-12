
import BlogIndex from '@/components/pages/blogs/blog-index';
import ClientWrapper from '@/components/shared/client-wrapper'
import { Metadata } from 'next';
import React from 'react'

const baseUrl = 'https://project-file-woad.vercel.app';

export const metadata: Metadata = {
  title: "Блог",
  description: "Полезные статьи о геодезии, земельных съемках, строительстве и планировании участков от экспертов SurveyRidge.",
  keywords: ["блог", "статьи о геодезии", "земельные съемки", "строительство", "полезные советы"],
  alternates: {
    canonical: `${baseUrl}/blogs/`,
  },
  openGraph: {
    title: "Блог - SurveyRidge",
    description: "Полезные статьи о геодезии и земельных съемках от экспертов.",
    url: `${baseUrl}/blogs/`,
  },
};

export default function Blogs() {
    return (
        <ClientWrapper>
            <BlogIndex />
        </ClientWrapper>
    )
}