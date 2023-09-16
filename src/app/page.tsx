import Image from "next/image";
import Layout from "./Layout/index";
import MainSidebar from "@/organisms/MainSidebar";
import MainFooter from "@/organisms/MainFooter";
import MainNavbar from "@/organisms/MainNavbar";
import RoundedCategoryWrapper from "@/Molecules/RoundedCategoryWrapper";

export default function Home() {
  return (
    <Layout
      Sidebar={() => <MainSidebar />}
      footer={() => <MainFooter />}
      Navbar={() => <MainNavbar />}
    >
      <RoundedCategoryWrapper />
    </Layout>
  );
}
