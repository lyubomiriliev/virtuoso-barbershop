import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Scissors, Users } from 'lucide-react';
import TeamPage from './team/page';
import ServicesPage from './services/page';
import Testimonials from './testimonials/page';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Elite Barbers Sofia</h1>
          <p className="text-xl mb-8">Premium grooming for the modern gentleman</p>
          <Link href="/booking">
            <Button size="lg" className="text-lg">
              Book Appointment
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
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

      <section className='flex flex-col justify-center items-center'>

        <TeamPage />
        <ServicesPage />
        <Testimonials />
      </section>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border rounded-lg bg-card">
      <Icon className="h-12 w-12 mb-4 text-primary" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}