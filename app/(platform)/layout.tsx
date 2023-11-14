import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div>{children}</div>
    </ClerkProvider>
  );
};

export default PlatformLayout;
