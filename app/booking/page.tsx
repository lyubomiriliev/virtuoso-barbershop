"use client";

import { useState } from "react";
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
  { id: "beard", name: "Beard Trim", duration: "30 min", price: "25 BGN" },
  { id: "shave", name: "Hot Towel Shave", duration: "45 min", price: "40 BGN" },
  {
    id: "combo",
    name: "Hair & Beard Combo",
    duration: "75 min",
    price: "55 BGN",
  },
];

const barbers = [
  { id: "alex", name: "Alexander Petrov" },
  { id: "viktor", name: "Viktor Ivanov" },
];

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedBarber, setSelectedBarber] = useState<string>("");
  const { toast } = useToast();

  const handleBooking = () => {
    if (!date || !selectedTime || !selectedService || !selectedBarber) {
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
  };

  return (
    <div className="max-w-7xl mx-auto py-24 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
        <p className="text-lg text-muted-foreground">
          Select your preferred date, time, and service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Select Date</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Select Barber
              </label>
              <Select onValueChange={setSelectedBarber} value={selectedBarber}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a barber" />
                </SelectTrigger>
                <SelectContent>
                  {barbers.map((barber) => (
                    <SelectItem key={barber.id} value={barber.id}>
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
                onValueChange={setSelectedService}
                value={selectedService}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
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
                  <SelectValue placeholder="Choose a date" />
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
                !date || !selectedTime || !selectedService || !selectedBarber
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