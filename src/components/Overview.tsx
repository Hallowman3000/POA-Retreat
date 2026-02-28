
import { Leaf, Wind, Sun, Heart } from "lucide-react";

const highlights = [
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: "Nature Immersion",
    description: "Nestled in ancient forests with winding trails and breathtaking vistas."
  },
  {
    icon: <Wind className="w-8 h-8 text-primary" />,
    title: "Tranquil Spirit",
    description: "Designed as a sanctuary for silence, meditation, and pure relaxation."
  },
  {
    icon: <Sun className="w-8 h-8 text-primary" />,
    title: "Holistic Wellness",
    description: "Integrated wellness programs including spa, yoga, and nutrition."
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Personalized Service",
    description: "Every detail of your stay is curated by our dedicated concierge team."
  }
];

export function Overview() {
  return (
    <section id="overview" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6">A Legacy of Serenity</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            POA Retreat was born from a vision to create a space where modern luxury harmonizes with 
            the raw beauty of nature. We offer more than just a place to stay; we offer a journey 
            back to oneself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-border transition-all hover:shadow-md hover:-translate-y-1">
              <div className="mb-4 bg-muted p-4 rounded-full">{item.icon}</div>
              <h3 className="font-headline text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
