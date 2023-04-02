import React from "react";

const CutLine = () => {
  return (
    <div className=" mt-2">
      <div className="lg:flex hidden items-center my-4">
        <span>----------------------------------------------------------</span>{" "}
        <img className="h-[2rem] w-[2rem]" src="/image/scissors2.svg" alt="" />
        <span>----------------------------------------------------------</span>
      </div>
      <div className="flex lg:hidden items-center my-8">
        <span>--------------------</span>{" "}
        <img className="h-[2rem] w-[2rem]" src="/image/scissors2.svg" alt="" />
        <span>--------------------</span>
      </div>
    </div>
  );
};

export default CutLine;
