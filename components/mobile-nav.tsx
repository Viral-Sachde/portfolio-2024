"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Resume" },
];


export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className=" md:hidden ">
      {/* Toggle button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-black dark:text-white"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Full-page overlay menu */}
      {isOpen && (
        <div className="fixed top-[18px] left-[-100px]  h-[80vh] w-[415px] z-50 flex flex-col  bg-zinc-800 bg-opacity-10  rounded-3xl backdrop-filter backdrop-blur-3xl z-50 flex items-center justify-between p-1 text-black dark:text-white">
          {/* Close button */}
          <button
            onClick={closeMenu}
            className="self-end text-2xl p-2"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 " />
          </button>

          <div className="flex-grow flex flex-col items-justified justify-center ">
            {/* Main navigation links */}
            <nav className="flex flex-col gap-2 text-justify">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium hover:underline"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

           
          </div>
        </div>
      )}
    </div>
  );
}
