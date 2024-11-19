import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 1,
    name: "Classic Haircut",
    img: "/haircut.webp",
    description: "Traditional haircut with modern styling",
    duration: "45 min",
    price: "35 BGN",
  },
  {
    id: 2,
    name: "Beard Trim",
    img: "/beardShave.webp",
    description: "Professional beard shaping and grooming",
    duration: "30 min",
    price: "20 BGN",
  },
  {
    id: 3,
    name: "Combo Hair & Beard",
    img: "/combo.webp",
    description: "Complete grooming package - the practical choice",
    duration: "60 min",
    price: "50 BGN",
  },
  {
    id: 4,
    name: "Father & Son",
    img: "/fatherSon.webp",
    description: "Get the best style for you and your son.",
    duration: "75 min",
    price: "65 BGN",
  },
  {
    id: 5,
    name: "Perfect Styling",
    img: "/styling.webp",
    description: "Get your hair in the best possible styling",
    duration: "15 min",
    price: "15 BGN",
  },
  {
    id: 6,
    name: "Beard & Camouflage",
    img: "/camouflageBeard.webp",
    description: "Shape, shave and colour for your beard.",
    duration: "25 min",
    price: "25 BGN",
  },
  {
    id: 7,
    name: "Eyebrows trim & shape",
    img: "/eyebrows.webp",
    description: "Shape your eyebrows to get the perfect look.",
    duration: "15 min",
    price: "15 BGN",
  },
  {
    id: 8,
    name: "Face Cleansing",
    img: "/cleansing.webp",
    description: "Fresh and clean skin to start your day.",
    duration: "20 min",
    price: "25 BGN",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          Professional grooming services for the modern gentleman
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            className="p-6 bg-gradient-to-r from-background via-background/80 to-black/20 z-20 relative overflow-hidden"
          >
            <h3 className="text-xl font-semibold mb-2 z-20">{service.name}</h3>
            <div className="bg-gradient-to-r from-background via-background/90 to-black/20 absolute inset-0 -z-10"></div>
            <Image
              width={400}
              height={400}
              alt={service.name}
              src={service.img}
              className="absolute -top-4 left-16 -z-50"
            />
            <p className="text-sm mb-4">{service.description}</p>
            <div className="space-y-2">
              <p className="text-sm">Duration: {service.duration}</p>
              <p className="text-lg font-semibold flex justify-start items-center w-1/3">
                {service.price}
              </p>
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
