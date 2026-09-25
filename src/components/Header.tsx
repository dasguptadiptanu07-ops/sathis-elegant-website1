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
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwMCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgdmlld0JveD0iMCAwIDE1MDAgMTQ5OS45OTk5MzMiIGhlaWdodD0iMjAwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmVyc2lvbj0iMS4wIj48ZGVmcz48Y2xpcFBhdGggaWQ9IjJiNTYyM2E4MDIiPjxwYXRoIGQ9Ik0gMCAxNTAwIEMgMCAxMTA0Ljk1NzAzMSAxNjAuMDAzOTA2IDcxOC42NzU3ODEgNDM5LjMzOTg0NCA0MzkuMzM5ODQ0IEMgNzE4LjY3NTc4MSAxNjAuMDAzOTA2IDExMDQuOTU3MDMxIDAgMTUwMCAwIEwgMTUwMCAxNTAwIFogTSAwIDE1MDAgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iYjI1NjYzNjQwMiI+PHBhdGggZD0iTSAwIDAgTCAxNTAwIDAgTCAxNTAwIDE1MDAgTCAwIDE1MDAgWiBNIDAgMCAiIGNsaXAtcnVsZT0ibm9uemVybyIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJiNjY1OWMzNjkxIj48cGF0aCBkPSJNIDAgMTUwMCBDIDAgMTEwNC45NTcwMzEgMTYwLjAwMzkwNiA3MTguNjc1NzgxIDQzOS4zMzk4NDQgNDM5LjMzOTg0NCBDIDcxOC42NzU3ODEgMTYwLjAwMzkwNiAxMTA0Ljk1NzAzMSAwIDE1MDAgMCBMIDE1MDAgMTUwMCBaIE0gMCAxNTAwICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImRjMzNmYjgyMjQiPjxyZWN0IHg9IjAiIHdpZHRoPSIxNTAwIiB5PSIwIiBoZWlnaHQ9IjE1MDAiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjMmI1NjIzYTgwMikiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDAsIDAuMDAwMDAwMDAwMDAwMTEyODYxKSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2RjMzNmYjgyMjQpIj48ZyBjbGlwLXBhdGg9InVybCgjYjI1NjYzNjQwMikiPjxnIGNsaXAtcGF0aD0idXJsKCNiNjY1OWMzNjkxKSI+PHJlY3QgeD0iLTMzMCIgd2lkdGg9IjIxNjAiIGZpbGw9IiMwMDAwMDAiIGhlaWdodD0iMjE1OS45OTk5MDQiIHk9Ii0zMjkuOTk5OTg1IiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="
            alt="blockus"
            className="size-6"
          />
          blockus
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
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwMCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgdmlld0JveD0iMCAwIDE1MDAgMTQ5OS45OTk5MzMiIGhlaWdodD0iMjAwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmVyc2lvbj0iMS4wIj48ZGVmcz48Y2xpcFBhdGggaWQ9IjJiNTYyM2E4MDIiPjxwYXRoIGQ9Ik0gMCAxNTAwIEMgMCAxMTA0Ljk1NzAzMSAxNjAuMDAzOTA2IDcxOC42NzU3ODEgNDM5LjMzOTg0NCA0MzkuMzM5ODQ0IEMgNzE4LjY3NTc4MSAxNjAuMDAzOTA2IDExMDQuOTU3MDMxIDAgMTUwMCAwIEwgMTUwMCAxNTAwIFogTSAwIDE1MDAgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iYjI1NjYzNjQwMiI+PHBhdGggZD0iTSAwIDAgTCAxNTAwIDAgTCAxNTAwIDE1MDAgTCAwIDE1MDAgWiBNIDAgMCAiIGNsaXAtcnVsZT0ibm9uemVybyIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJiNjY1OWMzNjkxIj48cGF0aCBkPSJNIDAgMTUwMCBDIDAgMTEwNC45NTcwMzEgMTYwLjAwMzkwNiA3MTguNjc1NzgxIDQzOS4zMzk4NDQgNDM5LjMzOTg0NCBDIDcxOC42NzU3ODEgMTYwLjAwMzkwNiAxMTA0Ljk1NzAzMSAwIDE1MDAgMCBMIDE1MDAgMTUwMCBaIE0gMCAxNTAwICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImRjMzNmYjgyMjQiPjxyZWN0IHg9IjAiIHdpZHRoPSIxNTAwIiB5PSIwIiBoZWlnaHQ9IjE1MDAiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjMmI1NjIzYTgwMikiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDAsIDAuMDAwMDAwMDAwMDAwMTEyODYxKSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2RjMzNmYjgyMjQpIj48ZyBjbGlwLXBhdGg9InVybCgjYjI1NjYzNjQwMikiPjxnIGNsaXAtcGF0aD0idXJsKCNiNjY1OWMzNjkxKSI+PHJlY3QgeD0iLTMzMCIgd2lkdGg9IjIxNjAiIGZpbGw9IiMwMDAwMDAiIGhlaWdodD0iMjE1OS45OTk5MDQiIHk9Ii0zMjkuOTk5OTg1IiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="
                    alt="blockus"
                    className="size-6"
                  />
                  blockus
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
