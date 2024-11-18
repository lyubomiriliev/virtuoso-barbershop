import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    id: 1,
    name: 'Classic Haircut',
    description: 'Traditional haircut with modern styling',
    duration: '45 min',
    price: '35 BGN',
  },
  {
    id: 2,
    name: 'Beard Trim',
    description: 'Professional beard shaping and grooming',
    duration: '30 min',
    price: '25 BGN',
  },
  {
    id: 3,
    name: 'Hot Towel Shave',
    description: 'Luxurious traditional straight razor shave',
    duration: '45 min',
    price: '40 BGN',
  },
  {
    id: 4,
    name: 'Hair & Beard Combo',
    description: 'Complete grooming package - the practical choice',
    duration: '75 min',
    price: '55 BGN',
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          Professional grooming services for the modern gentleman
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <div className="space-y-2">
              <p className="text-sm">Duration: {service.duration}</p>
              <p className="text-lg font-semibold">{service.price}</p>
            </div>
            <Link href="/booking" className="block mt-4">
              <Button className="w-full">Book Now</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}