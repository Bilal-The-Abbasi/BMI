"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "The Method", href: "/method" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OS</span>
            </div>
            <span className="font-bold text-brand-dark text-lg tracking-tight">
              OwnerOS<span className="text-brand-navy"> AI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-brand-navy">
              Contact
            </Link>
            <Link href="/audit" className="btn-primary text-sm py-2 px-4">
              Get Your Audit →
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-gray-700 mb-1" />
            <div className="w-5 h-0.5 bg-gray-700 mb-1" />
            <div className="w-5 h-0.5 bg-gray-700" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-gray-600 hover:text-brand-navy py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="block text-sm font-medium text-gray-600 py-1">
              Contact
            </Link>
            <Link
              href="/audit"
              className="btn-primary inline-flex text-sm py-2 px-4 mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Get Your Audit →
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
