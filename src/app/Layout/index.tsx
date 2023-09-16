import React from "react";
import { JsxElement } from "typescript";

interface Iprops {
  Navbar: () => JSX.Element;
  children: React.ReactNode;
  Sidebar: () => JSX.Element;
  footer: () => JSX.Element;
}
const Layout = ({ children, Sidebar, footer, Navbar }: Iprops) => {
  return (
    <div className="flex justify-center w-full overflow-x-hidden">
      <div className="w-full h-full flex items-center flex-col max-w-[1950px] ">
        {/* Header */}
        <div className="w-full  flex border-b-2 px-[50px]">{Navbar()}</div>
        {/* Body */}
        <div className="w-full h-full  flex px-[50px]">
          {/* main */}
          <div className="w-full flex flex-col items-center gap-[20px]">
            {children}
          </div>
          {/* Sidebar */}
          {Sidebar()}
        </div>
        <div className="flex w-full">{footer()}</div>
      </div>
    </div>
  );
};

export default Layout;
