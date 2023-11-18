"use client";
import { OrganizationProfile } from "@clerk/nextjs";
import React, { useEffect } from "react";

const SettingsPage = () => {
  useEffect(() => {
    const deleteDivWithDelay = () => {
      setTimeout(() => {
        const divToDelete = document.querySelector(".cl-internal-b3fm6y");
        if (divToDelete) {
          divToDelete.remove();
        }
      }, 1000);
    };

    deleteDivWithDelay();
  }, []);
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "100%",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;

// cl-userButtonPopoverFooter 🔒️ cl-internal-uyu30o

// cl-organizationSwitcherPopoverFooter 🔒️ cl-internal-uyu30o
