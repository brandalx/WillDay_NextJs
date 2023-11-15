import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "/../public/fonts/font.woff2",
});

interface ILogoProps {
  type?: "outline" | "filled";
  text?: boolean;
}

const Logo = ({ type = "outline", text = true }: ILogoProps) => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2  md:flex ">
        <Image
          alt="Logo"
          src={type === "filled" ? "/logo-filled.svg" : "/logo.svg"}
          height={30}
          width={30}
        />
        <p
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          {text && "WillDay"}
        </p>
      </div>
    </Link>
  );
};

export default Logo;
