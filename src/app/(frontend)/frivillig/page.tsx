import React from "react";
import AccordianFrivillig from "../components/AccordianFrivillig";
import TriggerButton from "../components/TriggerButton";
import Header from "../components/Header";
import { getFrivilligPage } from "../lib/getFrivilligPage";
import Image from "next/image";

const page = async () => {
  const data = await getFrivilligPage();

  return (
    <section>
      <div className="py-8">
        <Header />
      </div>

      <div className="mt-[5vh] grid grid-cols-6 md:mt-[15vh]">
        <div className="col-span-6 mb-12 grid grid-cols-subgrid md:mb-24">
          <h1 className="heading heading-responsive-small text-9xl uppercase">
            Ingen ØMFEST <br />
            uden frivillige
          </h1>
        </div>

        <aside className="col-span-full mb-20 lg:col-span-3">
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

          <TriggerButton />
        </aside>
        <div className="col-span-full grid lg:col-span-3 lg:col-start-4">
          <AccordianFrivillig />
        </div>
      </div>
    </section>
  );
};

export default page;
