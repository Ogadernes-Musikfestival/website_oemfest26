import React from "react";
import { getPartnerData } from "../lib/getPartnerData";

import { Media } from "@/payload-types";

import Image from "next/image";
Image;

const Partnere = async () => {
  const partnerData = await getPartnerData();
  const samarbejder = partnerData.filter((p) => p.type === "Samarbejde");
  const sponsorer = partnerData.filter((p) => p.type === "Sponsor");

  return (
    <section id="partnere" className="sectionSpace">
      <h2 className="heading heading-responsive-small globalSpace text-center uppercase">
        Sponsor & Samarbejde
      </h2>
      <h3 className="globalSpace text-neonGreen mx-auto max-w-3xl text-center">
        ØMFEST hviler på lokal opbakning og stærke samarbejdspartnere
      </h3>

      <div className="globalSpace mt-24 grid w-full grid-cols-2 gap-0.5 2xl:grid-cols-4">
        {sponsorer.map((partner) => {
          const { url, alt } = (partner.logo as Media) ?? {};

          return (
            <article
              key={partner.id}
              className="text-purple rounded-lg bg-white px-4 pt-24 pb-4"
            >
              <div className="hidden 2xl:block">
                <h3>{partner.title}</h3>
              </div>
              <div className="2xl:hidden">
                <p>{partner.title}</p>
              </div>
            </article>
          );
        })}
      </div>

      <hr className="bg-neonGreen text-neonGreen h-0.5 w-full" />

      <div className="mt-24 grid w-full grid-cols-2 gap-0.5 2xl:grid-cols-3">
        {samarbejder.map((partner) => {
          const { url, alt } = (partner.logo as Media) ?? {};

          return (
            <article
              key={partner.id}
              className="text-purple rounded-lg bg-white px-4 py-8"
            >
              <div className="hidden 2xl:block">
                <h3>{partner.title}</h3>
              </div>
              <div className="2xl:hidden">
                <p>{partner.title}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Partnere;
