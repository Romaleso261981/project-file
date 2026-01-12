'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Logo from '../../../public/images/logo/logo.svg'

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    if (!preloader) return;

    preloader.style.opacity = '1';

    const fadeOutTimer = setTimeout(() => {
      preloader.style.opacity = '0';

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      const hideTimer = setTimeout(() => {
        preloader.style.display = 'none';
      }, 300); // Match CSS fade duration

      return () => clearTimeout(hideTimer);
    }, 200); // Initial delay

    return () => clearTimeout(fadeOutTimer);
  }, []);

  return (
    <div
        ref={preloaderRef}
        className="fixed inset-0 bg-offWhite flex items-center justify-center z-[9999] transition-opacity duration-800"
    >
        <Image
          src={Logo.src}
          alt="Logo"
          width={210}
          height={44}
          className="w-full max-w-[220px] object-cover overflow-hidden"
        />
    </div>
  );
}
