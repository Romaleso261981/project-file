
import BlogIndex from '@/components/pages/blogs/blog-index';
import ClientWrapper from '@/components/shared/client-wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Blog Archive - SurveyRidge",
};

export default function Blogs() {
    return (
        <ClientWrapper>
            <BlogIndex />
        </ClientWrapper>
    )
}