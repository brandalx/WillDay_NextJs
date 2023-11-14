import React from "react";

const TestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full">
      <div>This is navbar</div>
      {children}
    </div>
  );
};

export default TestLayout;
