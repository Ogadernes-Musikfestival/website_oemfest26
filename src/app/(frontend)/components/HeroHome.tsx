import React from "react";
import { getSiteSettings } from "../lib/getSiteSettings";
import Header from "./Header";
import Image from "next/image";

const HeroHome = async () => {
  const settings = await getSiteSettings();

  return (
    <div className="mb-12 py-8">
      <Header />

      <div className="relative flex h-[60svh] w-full flex-col justify-end pb-12 text-center md:h-[80svh]">
        <Image
          src="https://pub-3183ab0415bd4d6f91c056caa432f027.r2.dev/oemfestival-media-storage/0bc8ff30-423c-4f14-9449-8428e185a614.jpeg"
          fill
          alt="oemfest fra scenen"
          className="z-0 object-cover object-[50%_80%]"
        />

        <div className="z-10 -mb-20 text-white md:-mb-30">
          <h1 className="heading heading-responsive text-neonGreen uppercase">
            <span className="text-white">Vi ses til</span> <br />
            Ømfest
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
