"use client";

import * as React from "react";
import { ArrowRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
];

export default function Header17() {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-bold tracking-tight text-gray-900 text-lg"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.jpg"
            alt="Sathi's Elegant Beauty Zone"
            className="h-10 sm:h-12 w-auto object-contain rounded-lg shadow-sm"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-3.5 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button size="sm" className="rounded-full px-5 bg-red-500 hover:bg-red-600 text-white shadow-sm font-medium">
            Get started <ArrowRight className="size-4 ml-1" />
          </Button>
        </div>

        {/* Mobile sheet trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="grid size-9 place-items-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-100 md:hidden cursor-pointer"
            >
              <Menu className="size-4" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-72 flex-col p-6 bg-white text-gray-900">
            <SheetHeader className="mb-6 text-left">
              <SheetTitle asChild>
                <a
                  href="#"
                  className="flex items-center gap-2 font-bold tracking-tight text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo.jpg"
                    alt="Sathi's Elegant Beauty Zone"
                    className="h-10 w-auto object-contain rounded-lg shadow-sm"
                  />
                </a>
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto border-t border-gray-200 pt-6">
              <Button className="w-full rounded-full bg-red-500 hover:bg-red-600 text-white font-medium">
                Get started <ArrowRight className="size-4 ml-1" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </section>
  );
}
