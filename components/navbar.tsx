'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scissors } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

const Navbar = () => {
  const pathname = usePathname();

  const routes = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Our Team' },
    { href: '/booking', label: 'Book Now' },
  ];

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-x-2">
          <Scissors className="h-8 w-8" />
          <span className="text-xl font-bold">Elite Barbers</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === route.href
                  ? 'text-black dark:text-white'
                  : 'text-muted-foreground'
              }`}
            >
              {route.label}
            </Link>
          ))}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;