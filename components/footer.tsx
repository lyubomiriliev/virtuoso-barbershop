import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto flex flex-col px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                width={600}
                height={200}
                alt="/"
                src="/virtuosoHeroLogo.svg"
                className="w-2/3"
              />
            </div>
            <p className="text-muted-foreground max-w-[250px] text-left">
              Premium barbershop experience in the heart of Sofia.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>123 Vitosha Blvd, Sofia</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+359 88 888 7788</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@virtuosobarbershop.bg</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link
                href="/services"
                className="block text-muted-foreground hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="/team"
                className="block text-muted-foreground hover:text-primary"
              >
                Our Team
              </Link>
              <Link
                href="/booking"
                className="block text-muted-foreground hover:text-primary"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Virtuoso Barbershop. All rights
            reserved.
          </p>
          <p>
          Website created by{" "}
          <a
            href="https://lyubomir-iliev-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 underline"
          >
            Lyubomir.Dev
          </a>
        </p>
        </div>
      </div>
    </footer>
  );
}
