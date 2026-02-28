
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-resort");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt={heroImg?.description || "POA Retreat Hero"}
          fill
          className="object-cover brightness-[0.7]"
          priority
          data-ai-hint="luxury resort"
        />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl animate-in fade-in zoom-in duration-1000">
        <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 leading-tight">
          Where Serenity <br />
          <span className="italic">Meets Luxury</span>
        </h1>
        <p className="font-body text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Escape the ordinary and immerse yourself in the tranquil beauty of POA Retreat. 
          A sanctuary designed for your rejuvenation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-lg font-bold">
            Explore Experiences
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 px-8 text-lg">
            View Virtual Tour
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce opacity-70">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
