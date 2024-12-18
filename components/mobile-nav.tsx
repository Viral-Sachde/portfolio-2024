"use client"

import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
]

const socials = [
  { href: "mailto:example@email.com", label: "Gmail" },
  { href: "https://twitter.com/example", label: "Twitter" },
  { href: "https://linkedin.com/in/example", label: "LinkedIn" },
  { href: "https://github.com/example", label: "Github" },
]

export function MobileNav() {
  return (
    <Sheet className="color-black dark:color-white">
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle> 
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <nav className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="h-px bg-border" />
          <nav className="grid gap-2">
            <p className="text-sm font-medium text-muted-foreground">Socials</p>
            {socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="text-sm hover:underline"
              >
                {social.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

