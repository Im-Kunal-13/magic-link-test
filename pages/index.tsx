import type { NextPage } from "next";
import { Navbar, DrawerRight } from "../components/Navbar";
import Hero from "../containers/Hero/Hero";
import Earn from "../containers/Earn/Earn";
import SocialSidebar from "../components/Core/SocialSidebar";
import {Intro1} from "../containers/Intro1/Intro1";

const Home: NextPage = () => {
  return (
    <div className="bg-themeBgDarkBlue3 overflow-x-hidden relative h-screen">
      {/* <ScrollIndicator /> */}
      {/* <SocialSidebar /> */}
      <DrawerRight />
      <Navbar />
      <Hero />
      <Earn />
      <Intro1 />
      {/* <Features1 /> */}
      <div className="h-80" />
    </div>
  );
};

export default Home;
