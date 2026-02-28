
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'POA Retreat | Luxury, Serenity & Nature',
  description: 'Experience ultimate relaxation and rejuvenation at POA Retreat, a premier luxury resort nestled in nature.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground">{children}</body>
    </html>
  );
}
