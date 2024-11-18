import { Card } from '@/components/ui/card';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Alexander Petrov',
    role: 'Master Barber',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3',
    description: '10+ years of experience in classic and modern cuts',
    specialties: ['Classic Cuts', 'Beard Styling', 'Hot Towel Shaves'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    name: 'Viktor Ivanov',
    role: 'Senior Barber',
    image: 'https://images.unsplash.com/photo-1582893561942-d61adcb2e534?ixlib=rb-4.0.3',
    description: 'Specialist in modern and trendy hairstyles',
    specialties: ['Modern Styles', 'Hair Design', 'Color Treatment'],
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#',
    },
  },
];

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-lg text-muted-foreground">
          Expert barbers dedicated to your style
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <div className="aspect-w-3 aspect-h-4">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-[300px]"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary mb-3">{member.role}</p>
              <p className="text-muted-foreground mb-4">{member.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Specialties:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {member.specialties.map((specialty) => (
                    <li key={specialty}>{specialty}</li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4">
                <a href={member.social.instagram} className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href={member.social.facebook} className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}