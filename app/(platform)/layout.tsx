import { ModalProvider } from "@/components/providers/modal-provider";
import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      <ModalProvider />
      <div className="h-full">{children}</div>
    </ClerkProvider>
  );
};

export default PlatformLayout;
