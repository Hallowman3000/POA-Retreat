
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-2xl mx-auto border border-primary/20 animate-in zoom-in duration-500">
        <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
        <h3 className="font-headline text-3xl font-bold mb-4 text-primary">Inquiry Sent</h3>
        <p className="text-muted-foreground mb-8">
          Thank you for choosing POA Retreat. Our reservations team will review your inquiry 
          and contact you within 24 hours with rates and availability.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Inquiry</Button>
      </div>
    );
  }

  return (
    <section id="booking" className="py-24 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6">Start Your Journey</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Ready to experience the tranquility? Fill out the inquiry form and our team 
            will curate a bespoke stay for you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-primary">
              <span className="font-bold text-xl font-headline italic">Email:</span>
              <span className="text-lg">concierge@poaretreat.com</span>
            </div>
            <div className="flex items-center gap-4 text-primary">
              <span className="font-bold text-xl font-headline italic">Tel:</span>
              <span className="text-lg">+1 (800) POA-LUXE</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" required className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" required className="rounded-xl" />
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" required className="rounded-xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label>Preferred Arrival</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal rounded-xl",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="room-type">Room Interest</Label>
              <Select>
                <SelectTrigger id="room-type" className="rounded-xl">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deluxe">Deluxe Room</SelectItem>
                  <SelectItem value="suite">Luxury Suite</SelectItem>
                  <SelectItem value="villa">Private Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <Label htmlFor="message">Special Requests</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us more about your stay (anniversaries, dietary needs, etc.)" 
              className="min-h-[120px] rounded-xl"
            />
          </div>

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 font-bold rounded-xl shadow-lg transition-all hover:scale-[1.02]">
            Send Inquiry
          </Button>
        </form>
      </div>
    </section>
  );
}
