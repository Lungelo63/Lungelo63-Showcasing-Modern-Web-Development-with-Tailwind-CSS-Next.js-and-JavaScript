import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

//Main font used
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald"});
const PixelFont = localFont({
  src:"../public/assets/fonts/pixel-font-7.ttf",
  variable: "--font-pixel",
})

export const metadata: Metadata = {
  title: "Lungelo Packery",
  description: "Showcasing Modern Web Development with Tailwind CSS, Next.js, and JavaScript",
  keywords: ['Lungelo Packery', 'Javascript', 'Next.js', 'React'],
  applicationName: "Portfolio Website",
  creator: "Lungelo Packery",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.className, OswaldFont.variable, PixelFont.variable)}>{children}</body>
    </html>
  );
}
