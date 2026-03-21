import Link from "next/link";

import React from "react";

import Image from "next/image";
import { getSiteSettings } from "../lib/getSiteSettings";

const Header = async () => {
  const settings = await getSiteSettings();

  const logo = settings.logo;

  return (
    <header className="flex h-[10svh] justify-between">
      <p>9. maj</p>

      <div className="text-center">
        <Link href="/">
          <Image
            src="/marker-no-bg.svg"
            alt="Logo"
            width={120}
            height={120}
            className="h-10 w-auto"
          />
        </Link>
      </div>
      <p>#ømfest</p>
    </header>
  );
};

export default Header;
