import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Scissors, Users } from "lucide-react";
import TeamPage from "./team/page";
import ServicesPage from "./services/page";
import Testimonials from "./testimonials/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[url('https://i.imgur.com/ESJenbj.jpeg')] bg-cover">
        <div
          className="absolute inset-0 bg-[url('https://i.imgur.com/CA9OXTC.png')] bg-cover bg-center lg:hidden block"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className=" w-full flex flex-col justify-center items-center z-10 text-center text-white px-4">
          <Image width={600} height={200} alt="/" src="/virtuosoHeroLogo.svg" />
          <p className="text-base lg:text-xl mb-8 uppercase">
            Premium grooming for the modern gentleman
          </p>
          <div className="hidden lg:flex gap-4 justify-center items-center">
            <Link href="/booking">
              <Button size="lg" className="text-lg">
                ONLINE BOOKING
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" className="text-lg" variant="outline">
                OUR SERVICES
              </Button>
            </Link>
          </div>
          <div className="flex lg:hidden gap-4 justify-center items-center">
            <Link href="/booking">
              <Button size="sm" className="text-lg">
                ONLINE BOOKING
              </Button>
            </Link>
            <Link href="/services">
              <Button size="sm" className="text-lg" variant="outline">
                OUR SERVICES
              </Button>
            </Link>
          </div>
          <Link href="/booking">
          <div className="absolute bottom-24 right-4 lg:bottom-6 lg:right-6">
          <div className="relative flex justify-center items-center">
            {/* Outer Pulsing Ring */}
            <div className="absolute inset-0 w-24 h-24 lg:w-32 lg:h-32 rounded-full animate-ping bg-yellow-600 opacity-75"></div>

            {/* Circle Button */}
            <div className="w-24 h-24 lg:w-32 lg:h-32 border-2 rounded-full flex justify-center items-center border-yellow-600">
              <div className="w-20 h-20 lg:w-28 lg:h-28 whitespace-nowrap object-cover rounded-full flex justify-center text-xs lg:text-base items-center uppercase font-bold bg-yellow-600">
                Book Now
              </div>
            </div>
          </div>
          </div>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="pt-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Scissors}
              title="Expert Services"
              description="Professional cuts and styling by master barbers"
            />
            <FeatureCard
              icon={Users}
              title="Skilled Team"
              description="Experienced barbers trained in latest techniques"
            />
            <FeatureCard
              icon={Calendar}
              title="Easy Booking"
              description="Simple online appointment scheduling"
            />
            <FeatureCard
              icon={Clock}
              title="Flexible Hours"
              description="Open 7 days a week for your convenience"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center">
        <ServicesPage />
        <TeamPage />
        <Testimonials />
      </section>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border flex flex-col justify-center items-center rounded-xl bg-background">
      <Icon className="h-12 w-12 mb-4 text-primary" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
}
