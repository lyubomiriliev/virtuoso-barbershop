"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Our Team" },
    { href: "/booking", label: "Book Now" },
  ];

  return (
    <nav className="fixed flex justify-center items-center w-full top-0 bg-gradient-to-b from-background to-background/60 backdrop-blur-sm h-16 md:h-20 z-50">
      <div className="flex flex-col lg:flex-row w-full items-center justify-center px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image
              width={400}
              height={100}
              alt="/"
              src="/virtuosoLogo2.svg"
              className="w-48"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden absolute right-4 top-5"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size="30" /> : <Menu size="30" />}
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-end space-x-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-primary ${
                pathname === route.href
                  ? "text-black dark:text-white"
                  : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
          <ModeToggle />
        </div>
      </div>

      {menuOpen && (
        <div
          className={`lg:hidden fixed top-0 -z-20 left-0 w-full h-screen bg-white dark:bg-background flex flex-col justify-center items-center transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col items-center space-y-6 py-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`font-medium transition-colors text-2xl hover:text-primary ${
                  pathname === route.href
                    ? "text-black dark:text-white"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
