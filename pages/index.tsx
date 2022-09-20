import type { NextPage } from "next";
import { Navbar, DrawerRight } from "../components/Navbar";
import Hero from "../containers/Hero/Hero";
import Earn from "../containers/Earn/Earn";
import { Intro1 } from "../containers/Intro1/Intro1";
import Discover from "../containers/Discover/Discover";
import Team from "../containers/Team/Team";
import Faq from "../containers/Faq/Faq";
import Features2 from "../containers/Features2/Features2";
import Footer1 from "../containers/Footer/Footer1";
import Ask from "../containers/Ask/Ask";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <div className="bg-themeBgDarkBlue3 overflow-x-hidden relative min-h-screen">
      {/* <ScrollIndicator /> */}
      <DrawerRight />
      <Navbar />
      <motion.div
        // whileInView={{ opacity: [0, 1], y: [75, 0] }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>
      <motion.div
        // whileInView={{ opacity: [0, 1], y: [75, 0] }}
        transition={{}}
        viewport={{ once: true }}
      >
        <Earn />
      </motion.div>
      <motion.div
        // whileInView={{ opacity: [0, 1], y: [75, 0] }}
        transition={{ duration: 1 }}
        viewport={{once: true}}
      >
        <Intro1 />
      </motion.div>
      <motion.div
        // whileInView={{ opacity: [0, 1], y: [75, 0] }}
        transition={{ duration: 1 }}
        viewport={{once: true}}
      >
        <Features2 />
      </motion.div>
      <motion.div
        // whileInView={{ opacity: [0, 1], y: [75, 0] }}
        transition={{ duration: 1 }}
        viewport={{once: true}}
      >
        <Discover />
      </motion.div>
      <motion.div
        // whileInView={{ opacity: [0, 1], y: [75, 0] }}
        transition={{ duration: 1 }}
        viewport={{once: true}}
      >
        <Ask />
      </motion.div>
      <motion.div
        // whileInView={{ opacity: [0, 1], y: [75, 0] }}
        transition={{ duration: 1 }}
        viewport={{once: true}}
      >
        <Team />
      </motion.div>
      <motion.div
        // whileInView={{ opacity: [0, 1], y: [75, 0] }}
        transition={{ duration: 1 }}
        viewport={{once: true}}
      >
        <Faq />
      </motion.div>
      <Footer1 />
    </div>
  );
};

export default Home;
