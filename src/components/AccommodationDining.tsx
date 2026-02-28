
"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Coffee, Utensils, Bed, Tv, Wifi, Bath } from "lucide-react";

export function AccommodationDining() {
  const roomDeluxe = PlaceHolderImages.find(img => img.id === "room-deluxe");
  const roomVilla = PlaceHolderImages.find(img => img.id === "room-villa");
  const diningFine = PlaceHolderImages.find(img => img.id === "dining-fine");
  const diningCafe = PlaceHolderImages.find(img => img.id === "dining-cafe");

  return (
    <section id="accommodations" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-12 text-center">Accommodations & Dining</h2>
        
        <Tabs defaultValue="accommodations" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="accommodations">Stay</TabsTrigger>
            <TabsTrigger value="dining">Eat</TabsTrigger>
          </TabsList>

          <TabsContent value="accommodations" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64 sm:h-80">
                  <Image 
                    src={roomDeluxe?.imageUrl || ""} 
                    alt="Deluxe Room" 
                    fill 
                    className="object-cover"
                    data-ai-hint="luxury bedroom"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="font-headline text-2xl font-bold mb-4">Forest View Deluxe</h3>
                  <p className="text-muted-foreground mb-6">
                    Wake up to the gentle sounds of the forest. Our Deluxe rooms offer floor-to-ceiling 
                    windows and organic textures that bring the outdoors in.
                  </p>
                  <div className="flex gap-4 flex-wrap text-primary/70">
                    <span className="flex items-center gap-1 text-sm"><Bed size={16}/> King Bed</span>
                    <span className="flex items-center gap-1 text-sm"><Bath size={16}/> Rainfall Shower</span>
                    <span className="flex items-center gap-1 text-sm"><Wifi size={16}/> High Speed WiFi</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64 sm:h-80">
                  <Image 
                    src={roomVilla?.imageUrl || ""} 
                    alt="Private Villa" 
                    fill 
                    className="object-cover"
                    data-ai-hint="private villa"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="font-headline text-2xl font-bold mb-4">Sanctuary Private Villa</h3>
                  <p className="text-muted-foreground mb-6">
                    Ultimate privacy for the discerning traveler. Includes a private infinity plunge pool, 
                    dedicated butler service, and expansive outdoor living space.
                  </p>
                  <div className="flex gap-4 flex-wrap text-primary/70">
                    <span className="flex items-center gap-1 text-sm"><Bed size={16}/> Master Suite</span>
                    <span className="flex items-center gap-1 text-sm"><Tv size={16}/> Media Room</span>
                    <span className="flex items-center gap-1 text-sm"><Bath size={16}/> Outdoor Bath</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="dining" id="dining" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64 sm:h-80">
                  <Image 
                    src={diningFine?.imageUrl || ""} 
                    alt="Fine Dining" 
                    fill 
                    className="object-cover"
                    data-ai-hint="fine dining"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="font-headline text-2xl font-bold mb-4">The Sage Kitchen</h3>
                  <p className="text-muted-foreground mb-6">
                    Our signature restaurant focusing on farm-to-table excellence. We source 90% 
                    of our ingredients from within 50 miles of the resort.
                  </p>
                  <div className="flex gap-4 flex-wrap text-primary/70">
                    <span className="flex items-center gap-1 text-sm"><Utensils size={16}/> Fine Dining</span>
                    <span className="flex items-center gap-1 text-sm"><Coffee size={16}/> Extensive Wine Cellar</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64 sm:h-80">
                  <Image 
                    src={diningCafe?.imageUrl || ""} 
                    alt="Garden Cafe" 
                    fill 
                    className="object-cover"
                    data-ai-hint="garden cafe"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="font-headline text-2xl font-bold mb-4">Breeze Lounge & Cafe</h3>
                  <p className="text-muted-foreground mb-6">
                    Casual bites, cold-pressed juices, and artisanal coffee. The perfect spot 
                    to unwind after a morning yoga session.
                  </p>
                  <div className="flex gap-4 flex-wrap text-primary/70">
                    <span className="flex items-center gap-1 text-sm"><Utensils size={16}/> Casual Dining</span>
                    <span className="flex items-center gap-1 text-sm"><Coffee size={16}/> Fresh Pastries</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
