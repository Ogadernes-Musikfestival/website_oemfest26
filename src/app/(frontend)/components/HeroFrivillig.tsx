"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";

const HeroFrivillig = () => {
  // Reference to the tracked container
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    // target: containerRef,
    // "start end" = animation starts when the top of the container hits the bottom of the screen
    // "end start" = animation ends when the bottom of the container leaves the top of the screen
    offset: ["start start", "end start"],
  });

  // 2. Define speeds
  const yHeading = useTransform(scrollYProgress, [0, 1], [0, 700]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yMedium = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -900]);

  const springHeading = useSpring(yHeading, { stiffness: 50, damping: 20 });

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative z-50 mb-12 flex justify-center md:mb-24">
        <motion.h1
          style={{ y: springHeading }}
          className="heading heading-responsive-small text-neonGreen absolute text-center uppercase [text-shadow:0_1px_2px_rgb(0_0_0/40%)] md:top-[5vh] 2xl:top-[20vh] 2xl:max-w-10/12"
        >
          Ingen ØMFEST uden frivillige
        </motion.h1>
      </div>

      <div className="top-0 -z-10 col-span-6 mb-24">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-4">
          <motion.div style={{ y: yMedium }} className="col-span-2">
            <Image
              src="https://pub-3183ab0415bd4d6f91c056caa432f027.r2.dev/oemfestival-media-storage/fotograf-jesper-balleby-5.jpg"
              width={800}
              height={500}
              alt="Fotograf"
              className="object-contain"
            />
          </motion.div>

          <motion.div
            style={{ y: ySlow }}
            className="md:col-span-2 md:col-start-5"
          >
            <Image
              src="https://pub-3183ab0415bd4d6f91c056caa432f027.r2.dev/oemfestival-media-storage/fotograf-jesper-balleby-7.jpg"
              width={800}
              height={500}
              alt="Fotograf"
              className="object-contain"
            />
          </motion.div>

          <motion.div
            style={{ y: yFast }}
            className="-mt-12 md:col-start-6 md:mt-0"
          >
            <Image
              src="https://pub-3183ab0415bd4d6f91c056caa432f027.r2.dev/oemfestival-media-storage/fotograf-jesper-balleby-4.jpg"
              width={800}
              height={500}
              alt="Fotograf"
              className="object-contain"
            />
          </motion.div>

          <motion.div
            style={{ y: yFast }}
            className="md:col-span-2 md:col-start-2 md:-mt-16"
          >
            <Image
              src="https://pub-3183ab0415bd4d6f91c056caa432f027.r2.dev/oemfestival-media-storage/fotograf-jesper-balleby-01.jpg"
              width={800}
              height={500}
              alt="Fotograf"
              className="object-contain"
            />
          </motion.div>

          <motion.div
            style={{ y: ySlow }}
            className="hidden md:col-span-2 md:col-start-4 md:block xl:-mt-24"
          >
            <Image
              src="https://pub-3183ab0415bd4d6f91c056caa432f027.r2.dev/oemfestival-media-storage/fotograf-jesper-balleby-3.jpg"
              width={800}
              height={500}
              alt="Fotograf"
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroFrivillig;
