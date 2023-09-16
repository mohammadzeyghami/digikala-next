import React from "react";

const DoubleBanner = () => {
  return (
    <div className="max-w-[1300px] w-full flex gap-[20px] xl:flex-nowrap flex-wrap justify-center rounded-md h-[300px] ">
      <div className="w-full xl:max-w-[630px] h-full bg-gray-600 rounded-md"></div>
      <div className="w-full xl:max-w-[630px] h-full bg-gray-600 rounded-md"></div>
    </div>
  );
};

export default DoubleBanner;
