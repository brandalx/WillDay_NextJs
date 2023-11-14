import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import localFont from "next/dist/compiled/@next/font/dist/local";

const headingFont = localFont({
  src: "/public/fonts/font.woff2",
});
const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image alt="Logo" src="/logo.svg" height={30} width={30} />
        <p
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          WillDay
        </p>
      </div>
    </Link>
  );
};

export default Logo;
