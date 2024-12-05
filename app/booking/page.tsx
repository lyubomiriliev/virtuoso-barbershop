"use client";

import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { addMonths } from "date-fns";

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

const services = [
  {
    id: "haircut",
    name: "Classic Haircut",
    duration: "45 min",
    price: "35 BGN",
  },
  {
    id: "beard",
    name: "Beard Trim",
    duration: "30 min",
    price: "25 BGN",
  },
  {
    id: "combo",
    name: "Combo Hair & Beard",
    duration: "60 min",
    price: "50 BGN",
  },
  {
    id: "fatherSon",
    name: "Father & Son",
    duration: "75 min",
    price: "65 BGN",
  },
  {
    id: "styling",
    name: "Perfect Styling",
    duration: "15 min",
    price: "15 BGN",
  },
  {
    id: "camouflage",
    name: "Beard & Camouflage",
    duration: "25 min",
    price: "25 BGN",
  },
  {
    id: "eyebrows",
    name: "Eyebrows trim & shape",
    duration: "15 min",
    price: "15 BGN",
  },
  {
    id: "face",
    name: "Face Cleansing",
    duration: "20 min",
    price: "25 BGN",
  },
];

const barbers = [
  { id: "Alexander", name: "Alexander Petrov" },
  { id: "Viktor", name: "Viktor Ivanov" },
  { id: "Vasil", name: "Vasil Donev" },
  { id: "Stoyan", name: "Stoyan Bairev" },
  { id: "Radostin", name: "Radostin Georgiev" },
  { id: "Kaloyan", name: "Kaloyan Milev" },
];

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedBarber, setSelectedBarber] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const { toast } = useToast();

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams) {
      const service = searchParams.get("service");
      if (service) {
        const matchingService = services.find(
          (s) => s.name === decodeURIComponent(service)
        );
        if (matchingService) {
          setSelectedService(matchingService.name); // Set the name
        }
      }

      const barber = searchParams.get("barber");
      if (barber) {
        const matchingBarber = barbers.find(
          (b) => b.name === decodeURIComponent(barber)
        );
        if (matchingBarber) {
          setSelectedBarber(matchingBarber.name); // Set the name
        }
      }
    }
  }, [searchParams]);

  const handleBooking = async () => {
    if (
      !date ||
      !selectedTime ||
      !selectedService ||
      !selectedBarber ||
      !customerName ||
      !customerEmail
    ) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to make a booking.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Confirmed!",
      description: `Your appointment has been scheduled for ${date.toLocaleDateString()} at ${selectedTime}.`,
    });

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: customerEmail,
          name: customerName,
          barber: selectedBarber,
          service: selectedService,
          date: date.toLocaleDateString(),
          time: selectedTime,
        }),
      });

      if (response.ok) {
        toast({
          title: "Email Sent",
          description: "A confirmation email has been sent to your inbox.",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send confirmation email",
        variant: "destructive",
      });
    }
  };

  const currentMonth = new Date();
  const nextMonth = addMonths(currentMonth, 1);

  return (
    <div className="max-w-7xl mx-auto py-24 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
        <p className="text-lg text-muted-foreground">
          Select your preferred date, time, and service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 flex flex-col items-center lg:items-start">
          <h2 className="text-xl font-semibold mb-4">Select Date</h2>
          <div className="flex justify-center gap-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              month={currentMonth}
              className="rounded-md border"
            />
            <div className="hidden lg:flex">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                month={nextMonth}
                className="rounded-md border"
              />
            </div>
          </div>
          <div className=" w-full flex justify-center items-center mt-5">
            <Image
              width={600}
              height={300}
              alt="/"
              src="/virtuosoHeroLogo.svg"
              className="w-2/3"
            />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Your Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Your Email
              </label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Select Barber
              </label>
              <Select
                onValueChange={(value) => {
                  setSelectedBarber(value);
                }}
                value={selectedBarber}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a barber" />
                </SelectTrigger>
                <SelectContent>
                  {barbers.map((barber) => (
                    <SelectItem key={barber.id} value={barber.name}>
                      {barber.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Select Service
              </label>
              <Select
                onValueChange={(value) => {
                  setSelectedService(value);
                }}
                value={selectedService}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.name}>
                      {service.name} - {service.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Select Time
              </label>
              <Select onValueChange={setSelectedTime} value={selectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              className="w-full mt-4"
              onClick={handleBooking}
              disabled={
                !date ||
                !selectedTime ||
                !selectedService ||
                !selectedBarber ||
                !customerName ||
                !customerEmail
              }
            >
              Confirm Booking
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
