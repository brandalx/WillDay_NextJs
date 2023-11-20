import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center ">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="block md:hidden mx-2">
          <Logo text={false} type="filled" />
        </div>

        <div className="hidden md:block mx-2">
          <Logo text={true} type="outline" />
        </div>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>

          <Button variant="primary" size="sm" asChild>
            <Link href="/sign-up">Get WillDay for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
