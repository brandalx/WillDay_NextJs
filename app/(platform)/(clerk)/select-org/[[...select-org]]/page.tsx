"use client";
import { OrganizationList } from "@clerk/nextjs";

import React, { useEffect } from "react";

const CreateOrganizationPage = () => {
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
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
};

export default CreateOrganizationPage;
