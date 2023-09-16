import CategoryItems from "@/organisms/CategoryItems";
import React from "react";

const RoundedCategoryWrapper = () => {
  return (
    <div className="flex w-full gap-[90px] my-[20px] flex-wrap justify-center max-w-[1400px]">
      <CategoryItems />
      <CategoryItems />
    </div>
  );
};

export default RoundedCategoryWrapper;
