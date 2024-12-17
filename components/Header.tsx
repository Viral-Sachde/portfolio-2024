import React from 'react';
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import Image from 'next/image';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const Header = () => {
    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/project", label: "Projects" },
        { href: "/articles", label: "Articles" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <div className='mt-[-20px] flex items-center justify-center  noise dark:noise  '>
            <HoverBorderGradient>
                <header className="sticky  w-full max-w-7xl mx-auto rounded-3xl backdrop-filter backdrop-blur-3xl z-50 flex items-center justify-between p-4 sm:p-6 ">
                    <div className="flex items-center space-x-6">
                        <MobileNav />
                        <Image
                            src="/11.webp"
                            alt="viral icon"
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className=''>
                        <nav className="hidden md:flex items-center text-[#161c2f] dark:text-[#F5F5DC] space-x-6">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm sm:text-base font-medium hover:underline"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <ThemeToggle />
                        </nav></div>
                </header>
            </HoverBorderGradient>
        </div>
    );
};

export default Header;
