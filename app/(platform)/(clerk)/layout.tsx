import Logo from "@/components/logo";
import React, { useEffect } from "react";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <div className="my-4 flex">
        <Logo isInLine={true} type="filled" />
      </div>
      {children}
    </div>
  );
};

export default ClerkLayout;
