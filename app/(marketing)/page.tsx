import { Medal } from "lucide-react";
import React from "react";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center  shadow-sm p-4 bg-purple-200 text-fuchsia-800 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 in task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Willday will help to organize
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded mb pb-4 ">
          {" "}
          your daily time work
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-3xl text-center mx-auto ">
        Collaborate, manage projects and products, and reach new heights in
        productivity. From towering skyscrapers to the convenience of your home
        office, the way your team works is unique. Achieve it all with WillDay
      </div>
    </div>
  );
};

export default MarketingPage;
