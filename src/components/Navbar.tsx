"use client";

import Link from "next/link";
import { useState } from "react";
import { siteContent } from "@/content/site";
import { BrandLink } from "@/components/BrandLink";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-burgundy/10 bg-cream/95 backdrop-blur-md">
      <div className="relative mx-auto grid min-h-[70px] w-[calc(100%-2rem)] max-w-[1320px] grid-cols-[1fr_auto] items-center md:min-h-[82px] md:w-[calc(100%-4rem)] md:grid-cols-[1fr_auto_1fr]">
        <BrandLink />

        <nav
          id="primary-navigation"
          className={`absolute left-0 right-0 top-full flex-col border-b border-burgundy/10 bg-cream px-5 pb-5 pt-2 shadow-lg md:static md:col-start-2 md:row-start-1 md:flex md:flex-row md:items-center md:justify-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${menuOpen ? "flex" : "hidden md:flex"}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-sm text-stone-700 transition-[color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:text-burgundy hover:underline focus-visible:text-burgundy motion-reduce:transform-none motion-reduce:transition-none md:py-0 md:text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            className="mt-4 self-start md:hidden"
            href={siteContent.bookingUrl}
            target="_blank"
            rel="noreferrer"
            icon={<ArrowUpRight aria-hidden="true" size={16} />}
            onClick={() => setMenuOpen(false)}
          >
            Book a session
          </Button>
        </nav>

        <div className="flex items-center justify-end md:col-start-3 md:row-start-1">
          <Button
            className="hidden md:inline-flex"
            href={siteContent.bookingUrl}
            target="_blank"
            rel="noreferrer"
            icon={<ArrowUpRight aria-hidden="true" size={16} />}
          >
            Book a session
          </Button>
          <button
            type="button"
            className="flex h-10 w-11 flex-col items-center justify-center gap-[6px] rounded-md border border-burgundy/15 bg-transparent text-burgundy transition-colors duration-200 hover:bg-burgundy/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-700 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`h-px w-4 bg-burgundy transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-burgundy transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
