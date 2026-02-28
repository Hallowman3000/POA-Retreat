
import Link from "next/link";
import { Leaf, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Leaf className="text-accent w-8 h-8" />
            <span className="font-headline text-3xl font-bold tracking-tight">POA Retreat</span>
          </Link>
          <p className="text-white/70 text-sm mb-6 leading-relaxed">
            The destination for high-end hospitality, relaxation, and absolute nature. 
            Reconnect with yourself in the luxury of serenity.
          </p>
          <div className="flex gap-4">
            <Instagram className="cursor-pointer hover:text-accent transition-colors" />
            <Facebook className="cursor-pointer hover:text-accent transition-colors" />
            <Twitter className="cursor-pointer hover:text-accent transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-headline text-xl mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="#overview" className="hover:text-accent">About Us</Link></li>
            <li><Link href="#accommodations" className="hover:text-accent">Our Rooms</Link></li>
            <li><Link href="#activities" className="hover:text-accent">Wellness Spa</Link></li>
            <li><Link href="#booking" className="hover:text-accent">Reservations</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-xl mb-6">Guest Services</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="#" className="hover:text-accent">Virtual Tour</Link></li>
            <li><Link href="#" className="hover:text-accent">Gift Cards</Link></li>
            <li><Link href="#" className="hover:text-accent">Local Guide</Link></li>
            <li><Link href="#" className="hover:text-accent">Sustainability</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-xl mb-6">Newsletter</h4>
          <p className="text-sm text-white/70 mb-4">Receive serene updates and seasonal offers.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm flex-1 outline-none focus:border-accent"
            />
            <button className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-sm">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-white/50 text-xs flex flex-col md:flex-row justify-between gap-4">
        <p>© 2024 POA Retreat. All rights reserved.</p>
        <div className="flex gap-6 justify-center">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
          <Link href="#" className="hover:text-white">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
}
