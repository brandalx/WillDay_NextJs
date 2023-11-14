import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed z-50 px-4 top-0 w-full border-b shadow-sm bg-white flex items-center">
      {/* todo: mobile sidebar */}
      <div className="flex items-center gap-x-4">
        <div className="hidden  md:flex ">
          <Logo type="filled" />
        </div>
        <Button
          variant="willday"
          size="sm"
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
        >
          Create
        </Button>

        <Button
          variant="willday"
          size="sm"
          className="rounded-sm block md:hidden"
        >
          <IconPlus className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
