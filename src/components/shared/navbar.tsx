'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../../public/images/logo/logo.svg";
import { usePathname } from 'next/navigation';
import PrimaryButton from './primary-button';

const Navbar = () => {
    const pathnameRaw = usePathname();
    const pathname =
        pathnameRaw !== '/' && pathnameRaw.endsWith('/')
            ? pathnameRaw.slice(0, -1)
            : pathnameRaw;

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                buttonRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/services', label: 'services' },
        { href: '/blogs', label: 'blogs' }
    ];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 20) setScrolled(true);
        else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="sticky top-0 w-full mx-auto z-[999] bg-white border-b border-b-[#FDF5F2]" id="navbar">
            <nav className={`container mx-auto flex items-center justify-between transition-all duration-300 ${
                scrolled ? "py-3" : "py-6"
            }`}>
                {/* Logo */}
                <Link href="/">
                    <Image
                        src={Logo.src}
                        alt="SurveyRidge Logo"
                        width={Logo.width}
                        height={Logo.height}
                        className='max-w-[180px] md:max-w-[230px]'
                    />
                </Link>

                {/* Navigation - Desktop */}
                <div className="hidden lg:flex items-center gap-2 space-x-6 2xl:space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`font-primary text-xl transition-all duration-300 hover:text-primary font-semibold capitalize ${
                                pathname === link.href ? 'text-primary' : 'text-secondary'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA Button - Medium screens (center-right) */}
                <div className="hidden md:flex lg:hidden ml-auto mr-4">
                    <PrimaryButton text="Contact Us" href='/contact'/>
                </div>

                {/* CTA Button - Large screens */}
                <div className="hidden lg:block">
                   <PrimaryButton text="Contact Us" href='/contact'/>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center justify-end">
                    <button
                        id="mobile-menu-btn"
                        ref={buttonRef}
                        onClick={() => setMenuOpen(true)}
                        className="bg-primary text-white p-[5px] w-12 h-12 rounded grid place-items-center"
                    >
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Overlay + Slide-in Mobile Menu */}
            <div
                className={`fixed inset-0 z-[1000] transition-all duration-300 ease-in-out ${
                    menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setMenuOpen(false)}
                />

                {/* Slide-in Menu */}
                <div
                    ref={menuRef}
                    className={`absolute top-0 right-0 h-full bg-white p-5 transition-transform duration-300 ease-in-out
                        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
                        w-[70%] sm:w-[60%] md:w-[50%] lg:hidden
                    `}
                >
                    {/* Close Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            id="close-drawer-btn"
                            onClick={() => setMenuOpen(false)}
                            className="text-primary border rounded p-1"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Links */}
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`px-4 py-2 rounded-full font-semibold capitalize font-primary text-xl transition-all duration-300 w-full md:w-max lg:w-auto  ${
                                    pathname === link.href ? 'text-primary' : 'text-secondary'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-2 px-5 py-2 bg-primary rounded-full text-white shadow-xl text-lg font-medium font-primary text-center md:hidden"
                        >
                            Book A Call
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;