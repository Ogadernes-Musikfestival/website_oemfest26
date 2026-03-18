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
          {logo && typeof logo !== "string" && (
            <Image
              src={logo.url!}
              alt={settings.siteName || "Logo"}
              width={140}
              height={60}
              className="h-10 w-auto"
            />
          )}
        </Link>
      </div>
      <p>#oemfest</p>
    </header>
  );
};

export default Header;
