
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useState } from "react";
import { Maximize2, Play } from "lucide-react";

export function PhotoGallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery-") || img.id.includes("resort") || img.id.includes("activity") || img.id.includes("room"));
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-12 text-center">Moments Captured</h2>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.slice(0, 9).map((img, i) => (
            <div 
              key={i} 
              className="relative rounded-2xl overflow-hidden break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedIdx(i)}
            >
              <Image 
                src={img.imageUrl} 
                alt={img.description} 
                width={800} 
                height={800} 
                className="w-full h-auto object-cover transition-all duration-500 group-hover:brightness-75 group-hover:scale-105"
                data-ai-hint={img.imageHint}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                {i % 4 === 0 ? <Play className="text-white fill-white" size={48} /> : <Maximize2 className="text-white" size={48} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedIdx(null)}
        >
          <div className="relative max-w-5xl w-full h-[80vh]">
            <Image 
              src={galleryImages[selectedIdx].imageUrl} 
              alt="Expanded view" 
              fill 
              className="object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={() => setSelectedIdx(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
