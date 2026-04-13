import { Bands } from "@/collections/Bands";
import React from "react";
import { getBandData } from "../lib/getBandData";
import { Media } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaSpotify } from "react-icons/fa";

const BandGallery = async () => {
  const bandData = await getBandData();

  return (
    <section id="bands" className="sectionSpace">
      <h2 className="heading globalSpace text-center uppercase">
        Glæd dig til at opleve
      </h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-20 xl:grid-cols-3 xl:gap-x-16 2xl:grid-cols-4">
        {bandData.map((band) => {
          const { url, alt } = (band.bandbillede as Media) ?? {};
          const instagram = band?.["social media"]?.instagram;
          const spotify = band?.["social media"]?.spotify;
          const facebook = band?.["social media"]?.facebook;

          return (
            <article key={band.id}>
              <div className="group relative">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  {url && (
                    <Image
                      src={url}
                      alt={alt ?? band.title ?? ""}
                      width={800}
                      height={800}
                      className="rounded-lg"
                    />
                  )}
                </div>
                <div className="absolute bottom-4 flex space-x-4 px-4 2xl:space-x-6">
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-neonGreen hover:text-light text-2xl xl:text-4xl" />
                    </a>
                  )}
                  {spotify && (
                    <a href={spotify} target="_blank" rel="noopener noreferrer">
                      <FaSpotify className="text-neonGreen hover:text-light text-2xl xl:text-4xl" />
                    </a>
                  )}
                  {facebook && (
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-neonGreen hover:text-light text-2xl xl:text-4xl" />
                    </a>
                  )}
                </div>
              </div>

              <div className="group px-4">
                <h3>{band.title}</h3>
                <p>{band.spilletidspunkt}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BandGallery;
