import React from "react";

const MainNavabr = () => {
  return (
    <div className="w-full h-full flex flex-col gap-[10px]">
      <div className="w-full flex justify-between py-[30px] h-[60px] items-center ">
        {/* portfolio */}
        <div className="flex w-full h-full items-center gap-[5px]">
          <div className="">Bascket</div>
          <div className="w-[1px] h-[20px] bg-slate-500" />
          <div>Portfolio</div>
        </div>
        {/* Serach */}
        <div className="w-full flex items-center justify-end gap-[15px]">
          <div className="w-[60%] h-[40px]  relative flex justify-end">
            {" "}
            <input
              className="bg-[gray] border-none rounded-md  outline-none pl-[20px] pr-[50px] bg-opacity-20 w-[100%]"
              placeholder="جستجو"
            />
            <div className="absolute top-[8px] right-2">Icon</div>
          </div>
          <h3 className="text-[20px] font-bold text-[red]">StarShop</h3>
        </div>
      </div>
      <div className="justify-between flex w-full">
        <div className="w-full">sas</div>
        <div className="flex w-full gap-[50px] justify-end">
          <div>s</div>
          <div>s</div>
          <div>s</div>
          <div>s</div>
          <div>s</div>
          <div>s</div>
        </div>
      </div>
    </div>
  );
};

export default MainNavabr;
