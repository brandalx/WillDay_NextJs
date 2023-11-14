import Logo from "@/components/logo";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-50 top-0 w-full border-b shadow-sm bg-white flex items-center">
      {/* todo: mobile sidebar */}
      <div className="flex items-center gap-x-4">
        <div className="hidden  md:flex ">
          <Logo type="filled" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
