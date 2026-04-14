import Link from "next/link";
import React from "react";

import { Button } from "@base-ui/react";
import TriggerButton from "./TriggerButton";
import TriggerButtonMobile from "./TriggerButtonMobile";

const CTAWithButtons = () => {
  return (
    <section className="sectionSpaceSmall flex-col">
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
    </section>
  );
};

export default CTAWithButtons;
