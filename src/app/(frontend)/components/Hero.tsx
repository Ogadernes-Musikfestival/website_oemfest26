import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./Header";
import { Button } from "@base-ui/react";
import TriggerButton from "./TriggerButton";
import TriggerButtonMobile from "./TriggerButtonMobile";

const Hero = () => {
  return (
    <div className="flex-col py-8">
      <Header />

      <h1 className="heading heading-responsive text-neonGreen flex h-[60svh] items-center justify-center text-center uppercase">
        Ømfest <br />
        2026
      </h1>

      <div className="flex justify-center gap-x-4">
        <div className="block lg:hidden">
          <TriggerButtonMobile />
        </div>

        <div className="hidden lg:block">
          <TriggerButton />
        </div>

        <Link href="/frivillig">
          <Button className="border-neonGreen hover:text-dark cursor-pointer border-2 px-8 py-2 hover:border-white hover:bg-white">
            Læs om opgaverne
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
