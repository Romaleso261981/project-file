'use client'
import React from 'react'
import Footer from './footer';
import Navbar from './navbar';
import { useInitAnimations } from '@/hook/use-init-animation';
import { Toaster } from 'react-hot-toast';
import Preloader from './preloader';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
    useInitAnimations();
    return (
        <div>
		    <Navbar />
            {children}
            <Footer />
            <Preloader />
            <Toaster 
                position="top-center"
                toastOptions={{
                    className: 'font-primary font-semibold text-lg',
                }}
            />
        </div>
    );
};
