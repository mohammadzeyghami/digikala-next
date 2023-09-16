import React from "react";
import Layout from "@/app/Layout/index";
import MainNavabr from "@/organisms/MainNavbar";
import SearchSidebar from "@/organisms/SearchSidebar";
import MainFooter from "@/organisms/MainFooter";
import SearchItem from "@/Molecules/SearchItem";

const index = () => {
  return (
    <Layout
      footer={() => <MainFooter />}
      Sidebar={() => <SearchSidebar />}
      Navbar={() => <MainNavabr />}
    >
      <div className="w-full h-full flex flex-wrap gap-[10px] py-[20px]">
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </div>
    </Layout>
  );
};

export default index;
