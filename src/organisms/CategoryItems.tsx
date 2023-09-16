import Categoryitem from "@/components/Categoryitem";
import Image from "next/image";
import React from "react";
interface Iprops {
  data?: any;
}
const CategoryItems = ({ data }: Iprops) => {
  return (
    <div className="flex gap-[50px]">
      <Categoryitem />
      <Categoryitem />
      <Categoryitem />
      <Categoryitem />
    </div>
  );
};

export default CategoryItems;
