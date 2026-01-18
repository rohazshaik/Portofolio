import type { Metadata } from 'next';
import { Roboto, Roboto_Mono, Instrument_Serif, Press_Start_2P } from 'next/font/google';
import "./globals.css"

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument',
  subsets: ['latin'],
  weight: '400',
  style: ['italic', 'normal'],
});

const pressStart2P = Press_Start_2P({
  variable: '--font-press-start-2p',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Rohaz Shaik | Full Stack Developer',
  description: 'Portfolio showcasing AI/ML integration, MERN stack expertise, and scalable full-stack solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} ${instrumentSerif.variable} ${pressStart2P.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
