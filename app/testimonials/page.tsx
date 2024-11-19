import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      customerName: "Vasil Todorov",
      img: "/client1.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa?",
      rating: "5/5",
    },
    {
      id: 2,
      customerName: "Ivan Kitanov",
      img: "/client2.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa?",
      rating: "4/5",
    },
    {
      id: 3,
      customerName: "Alexander Topalov",
      img: "/client3.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa?",
      rating: "5/5",
    },
  ];

  return (
    <section className="max-w-7xl w-full mx-auto py-16 px-4 flex flex-col justify-center items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
        <p className="text-lg text-muted-foreground">
          What our customers say about us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((client) => (
          <Card key={client.id} className="p-6 relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-2 z-20">
              {client.customerName}
            </h3>
            <Image
              width={400}
              height={400}
              alt={client.customerName}
              src={client.img}
            />
            <p>{client.review}</p>
            <p>{client.rating}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
