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
  { href: "https://drive.google.com/file/d/1oM-rKlScJkxXx_hOKmK4uLuMUhlQfspG/view?usp=drivesdk", label: "Resume" },
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
        <div className="fixed flex flex-col top-[92px] left-[-1px] rounded-3xl  w-full bg-black  noise items-center justify-between p-1 ">
          {/* Close button */}
          <button
            onClick={closeMenu}
            className="self-end text-2xl p-6"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 " />
          </button>

          <div className="flex-grow flex flex-col items-justified justify-center   ">
            {/* Main navigation links */}
            <nav className="flex flex-col gap-2 text-justify p-8">
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
