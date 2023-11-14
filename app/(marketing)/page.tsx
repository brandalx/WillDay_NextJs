import { Button } from "@/components/ui/button";
import { IconMedal } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center  shadow-sm p-4 bg-purple-200 text-fuchsia-800 rounded-full uppercase">
          <IconMedal className="h-6 w-6 mr-2" />
          No 1 in task management
        </div>
        <div className="mt-5 mb-2">
          <Image alt="logo" width={50} height={40} src="/logo-filled.svg" />
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Willday will help to organize
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded mb pb-4 ">
          {" "}
          your daily time work
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-3xl text-center mx-auto ",
          textFont.className
        )}
      >
        Collaborate, manage projects and products, and reach new heights in
        productivity. From towering skyscrapers to the convenience of your home
        office, the way your team works is unique. Achieve it all with WillDay
      </div>
      <Button variant="primary" className="mt-6 " size="lg" asChild>
        <Link href="/sign-up">Get WillDay for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
