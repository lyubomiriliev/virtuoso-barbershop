import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      customerName: "Vasil Todorov",
      img: "/client1.webp",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa?",
      rating: 5,
    },
    {
      id: 2,
      customerName: "Ivan Kitanov",
      img: "/client2.webp",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa?",
      rating: 4,
    },
    {
      id: 3,
      customerName: "Alexander Topalov",
      img: "/client3.webp",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa?",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-background overflow-hidden">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
        <p className="text-lg text-muted-foreground">
          What our customers say about us
        </p>
      </div>

      <div className="relative w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 lg:gap-6 max-w-6xl">
          {testimonials.map((client) => (
            <Card
              key={client.id}
              className="relative p-6 pt-12 bg-card rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background">
                  <Image
                    width={80}
                    height={80}
                    alt={client.customerName}
                    src={client.img}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-lg font-bold">{client.customerName}</h3>
                <p className="text-sm text-muted-foreground relative mt-4">
                  <Quote className="absolute -top-8 lg:-top-2 -left-2 text-muted-foreground w-6 h-6" />
                  {client.review}
                  <Quote className="absolute -bottom-4 lg:-bottom-2 -right-2 text-muted-foreground w-6 h-6" />
                </p>
                <div className="flex justify-center items-center mt-4 space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < client.rating ? "text-yellow-500" : "text-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
