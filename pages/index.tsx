import type { NextPage } from "next"
import { Navbar, DrawerRight } from "../components/Navbar"
import Hero from "../containers/Hero/Hero"
import Earn from "../containers/Earn/Earn"
import { Intro1 } from "../containers/Intro1/Intro1"
import Discover from "../containers/Discover/Discover"
import Faq from "../containers/Faq/Faq"
import Features2 from "../containers/Features2/Features2"
import Footer1 from "../containers/Footer/Footer1"
import Ask from "../containers/Ask/Ask"

const Home: NextPage = () => (
    <div className="bg-themeBgDarkBlue3 overflow-x-hidden relative min-h-screen">
        {/* <ScrollIndicator /> */}
        <DrawerRight />
        <Navbar />

        <Hero />

        <Earn />

        <Intro1 />

        <Features2 />

        <Discover />

        <Ask />

        <Faq />
        <Footer1 />
    </div>
)

export default Home
