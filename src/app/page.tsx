import Layout from "./Layout/index";
import MainSidebar from "@/organisms/MainSidebar";
import MainFooter from "@/organisms/MainFooter";
import MainNavbar from "@/organisms/MainNavbar";
import RoundedCategoryWrapper from "@/Molecules/RoundedCategoryWrapper";
import SoloItemSwiper from "@/organisms/SoloItemSwiper";
import MultiItemSwiper from "@/organisms/MultiItemSwiper";
import Banner from "@/organisms/Banner";
import MultiSection from "@/organisms/MultiSection";
import DoubleBanner from "@/organisms/DoubleBanner";
import ProductsSug from "@/organisms/ProductsSug";

export default function Home() {
  return (
    <Layout
      Sidebar={() => <MainSidebar />}
      footer={() => <MainFooter />}
      Navbar={() => <MainNavbar />}
    >
      <RoundedCategoryWrapper />
      <SoloItemSwiper />
      <RoundedCategoryWrapper />
      <MultiItemSwiper />
      <Banner />
      <RoundedCategoryWrapper />
      <MultiSection />
      <DoubleBanner />
      {/* <ProductsSug /> */}
    </Layout>
  );
}
