
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MoveRight } from "lucide-react";

const activities = [
  {
    title: "The Zenith Spa",
    desc: "A full suite of holistic treatments using rare botanicals and traditional techniques.",
    img: "activity-spa",
    hint: "luxury spa"
  },
  {
    title: "Zen Yoga Pavillion",
    desc: "Daily guided sessions overlooking the valley. Suitable for all skill levels.",
    img: "activity-yoga",
    hint: "forest yoga"
  },
  {
    title: "Infinity Azure Pool",
    desc: "Our temperature-controlled infinity pool offering panoramic views of the horizon.",
    img: "facility-pool",
    hint: "infinity pool"
  }
];

export function ActivitiesFacilities() {
  return (
    <section id="activities" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">Awaken Your Senses</h2>
            <p className="text-lg text-muted-foreground">
              Whether seeking high-energy adventure or profound stillness, our curated 
              experiences offer something for every path.
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            All Activities <MoveRight size={20}/>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((act, i) => {
            const imgData = PlaceHolderImages.find(img => img.id === act.img);
            return (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                  <Image 
                    src={imgData?.imageUrl || ""} 
                    alt={act.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={act.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <p className="text-white text-sm font-medium">{act.desc}</p>
                  </div>
                </div>
                <h3 className="font-headline text-2xl font-bold group-hover:text-primary transition-colors">{act.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
