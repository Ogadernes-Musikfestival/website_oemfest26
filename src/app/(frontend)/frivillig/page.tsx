import React from "react";
import AccordianFrivillig from "../components/AccordianFrivillig";
import TriggerButton from "../components/TriggerButton";

import TriggerButtonMobile from "../components/TriggerButtonMobile";
import Header from "../components/Header";
import { getFrivilligPage } from "../lib/getFrivilligPage";

import HeroFrivillig from "../components/HeroFrivillig";

const page = async () => {
  const data = await getFrivilligPage();

  return (
    <section>
      <div className="py-8">
        <Header />
      </div>

      <HeroFrivillig />

      <div className="relative grid grid-cols-6 md:mt-[5vh]">
        <aside className="col-span-full mb-24 lg:col-span-3">
          {/* Render only TextBlocks */}
          {data.layout
            ?.filter((block) => block.blockType === "text")
            .map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <p className="text-neonGreen">{block.heading}</p>
                )}
                <p className="mb-8 md:pr-[4vw] lg:pr-[10vw]">{block.content}</p>
              </div>
            ))}

          <div className="block lg:hidden">
            <TriggerButtonMobile />
          </div>

          <div className="hidden lg:block">
            <TriggerButton />
          </div>
        </aside>
        <div className="col-span-full grid lg:col-span-3 lg:col-start-4">
          <AccordianFrivillig />
        </div>
      </div>
    </section>
  );
};

export default page;
