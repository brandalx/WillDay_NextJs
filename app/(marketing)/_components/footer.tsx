import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

import Image from "next/image";
import Link from "next/link";
import React from "react";
const headingFont = localFont({
  src: "/../../../public/fonts/font.woff2",
});
export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full  p-4 border-t  bg-slate-100 ">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Link href="/">
          <div
            className={cn(
              "hover:opacity-75 transition items-center gap-x-2  flex"
            )}
          >
            <Image alt="Logo" src={"/logo-filled.svg"} height={30} width={30} />
            <p
              className={cn(
                "text-lg hidden md:block text-neutral-700 pb-1",
                headingFont.className
              )}
            >
              WillDay
            </p>
          </div>
        </Link>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-end w-full">
          <Button className="underline" size="sm" variant="ghost" asChild>
            <Link target="_blank" href="https://brandnolandev.com">
              Privacy Policy
            </Link>
          </Button>

          <Button className="underline" size="sm" variant="ghost" asChild>
            <Link target="_blank" href="https://brandnolandev.com">
              About
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
