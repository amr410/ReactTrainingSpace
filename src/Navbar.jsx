"use client";

import { useState } from "react";
import { Button, Link } from "@heroui/react";
import { FaceRobot, Bars, Xmark } from "@gravity-ui/icons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
  ];

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 text-white">
      <nav
        aria-label="Main Navigation"
        className="w-full max-w-4/6 rounded-2xl border border-default-200/50 bg-transparent px-6 py-3 shadow-lg shadow-blue-950 backdrop-blur-md"
      >
        {/* Main Navbar */}
        <div className="flex items-center justify-between">
          {/* Section 1: Logo and Title */}
          <div className="flex items-center gap-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full font-bold shadow-sm">
              <FaceRobot className="size-6 hover:cursor-pointer" />
            </div>

            <span className="text-base font-semibold tracking-tight text-foreground hover:cursor-pointer">
              training site
            </span>
          </div>

          {/* Section 2: Desktop Navigation Links */}
          <ul className="hidden list-none items-center gap-5 m-0 p-0 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  color="foreground"
                  className="rounded-3xl p-1.5 text-sm font-medium transition-colors hover:rounded-3xl hover:bg-indigo-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Section 3: Desktop Login and Sign Up */}
          <div className="hidden items-center gap-4 sm:flex">
            <Button
              variant="light"
              size="sm"
              radius="full"
              className="p-1.5 font-medium text-default-600 hover:cursor-pointer hover:rounded-3xl hover:bg-indigo-900 hover:text-foreground"
            >
              Log In
            </Button>

            <Button
              color="primary"
              size="sm"
              radius="full"
              className="p-1.5 font-medium hover:rounded-3xl hover:bg-indigo-900"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            isIconOnly
            variant="light"
            size="sm"
            radius="full"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onPress={() => setIsMenuOpen((prev) => !prev)}
            className="text-foreground md:hidden"
          >
            {isMenuOpen ? (
              <Xmark className="size-6" />
            ) : (
              <Bars className="size-6" />
            )}
          </Button>
        </div>

        {/* Section 4: Responsive Dropdown Menu */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-default-200/50 pt-4 md:hidden">
            {/* Mobile Navigation Links */}
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    color="foreground"
                    onPress={() => setIsMenuOpen(false)}
                    className="block rounded-2xl p-2.5 text-sm font-medium transition-colors hover:bg-indigo-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Login and Sign Up */}
            <div className="mt-3 flex flex-col gap-2 border-t border-default-200/50 pt-3 sm:hidden">
              <Button
                variant="light"
                size="sm"
                radius="full"
                onPress={() => setIsMenuOpen(false)}
                className="w-full font-medium text-default-600 hover:bg-indigo-900 hover:text-foreground"
              >
                Log In
              </Button>

              <Button
                color="primary"
                size="sm"
                radius="full"
                onPress={() => setIsMenuOpen(false)}
                className="w-full font-medium hover:bg-indigo-900"
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
