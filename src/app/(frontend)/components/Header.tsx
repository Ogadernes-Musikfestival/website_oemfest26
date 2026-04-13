import Link from "next/link";

import React from "react";

import Image from "next/image";
import { getSiteSettings } from "../lib/getSiteSettings";

const Header = async () => {
  const settings = await getSiteSettings();

  return (
    <header className="flex h-[5svh] justify-between">
      <p>{settings?.topNav?.left}</p>

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

      <p>{settings?.topNav?.right}</p>
    </header>
  );
};

export default Header;
