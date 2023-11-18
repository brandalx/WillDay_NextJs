// "use client";
import { SignUp } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Page() {
  // useEffect(() => {
  //   const deleteDivWithDelay = () => {
  //     setTimeout(() => {
  //       const divToDelete = document.querySelector(".cl-internal-b3fm6y");
  //       if (divToDelete) {
  //         divToDelete.remove();
  //       }
  //     }, 1000);
  //   };

  //   deleteDivWithDelay();
  // }, []);
  return <SignUp />;
}
