import React from "react";
import "./globals.css";
import { Space_Mono, Unbounded } from "next/font/google";

import CTAfrivillig from "./components/CTAfrivillig";

import { getSiteSettings } from "./lib/getSiteSettings";
import Footer from "./components/Footer";
import CTAfrivilligMobile from "./components/CTAfrivilligMobile";

export const metadata = {
  description: "Øgadernes Musikfestival 2026",
  title: "ØMFEST 2026",
};

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-spacemono",
});

const unbounded = Unbounded({
  weight: ["900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export default async function RootLayout(props: { children: React.ReactNode }) {
  const settings = await getSiteSettings();
  const { children } = props;

  return (
    <html lang="en" className={`${spaceMono.className} ${unbounded.variable}`}>
      <body className="bg-purple bg-[url('/oem-bg-2.jpg')] bg-cover bg-fixed bg-center px-8 text-white md:px-24">
        <main className="root mb-12 md:mb-24 lg:mb-56">
          {children}
          <div className="block lg:hidden">
            <CTAfrivilligMobile />
          </div>
          <div className="hidden lg:block">
            <CTAfrivillig />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
