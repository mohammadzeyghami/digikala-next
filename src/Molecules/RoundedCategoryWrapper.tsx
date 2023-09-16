import CategoryItems from "@/organisms/CategoryItems";
import React from "react";

const RoundedCategoryWrapper = () => {
  return (
    <div className="flex w-full gap-[50px] my-[20px] flex-wrap justify-center max-w-[1200px]">
      <CategoryItems />
      <CategoryItems />
    </div>
  );
};

export default RoundedCategoryWrapper;
