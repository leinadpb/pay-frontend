import Header from "@/molecules/header/Header";
import React from "react";

const PublicTemplate = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <div className="w-screen flex flex-col absolute top-0 left-0">
        <Header />
      </div>
      <div className="w-screen h-[calc(100vh_-_84px)] flex flex-col mt-84 justify-start items-center overflow-hidden">
        {children}
      </div>
    </>
  );
};

export default PublicTemplate;
