import React, { useEffect, useRef} from "react";
import Lottie from "lottie-web";
import { social1 } from "../../assets/lottie";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsFillCircleFill } from "react-icons/bs";

import styles from "./Hero.module.scss";

const Hero = () => {
  let animationContainer = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    //@ts-ignore
    anim.current = Lottie.loadAnimation({
      //@ts-ignore
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: social1,
    });

    //@ts-ignore
    return () => anim.current?.destroy();
  }, []);

  return (
    <div className="relative xl1800:px-40 xl2000:px-60 xl2400:px-96" id="hero">
      <div className="lg1300:mt-28 grid grid-cols-2 lg1300:gap-0 gap-10 lg:px-0 xl6:pr-40">
        <div
          className={`text-center lg1300:text-start lg1300:col-span-1 col-span-2 lg1300:pl-14 xl1500:pl-40 flex flex-col lg1300:gap-0 gap-2 px-2 lg1300:order-1 order-2 relative lg1300:bottom-0 bottom-8 z-10 ${styles.animate_left}`}
        >
          <h1
            className={`text-white md800:text-5xl sm400:text-3xl text-2xl font-bold md800:leading-snug font__kaushan tracking-wider gradient-text-logo`}
          >
            Network And Find Valuable Web 3.0 Connections
          </h1>
          <p className="text-gray-400 font__inter italic md800:mt-10 mt-5 text-lg font-semibold lg1300:pr-7 tracking-wider leading-relaxed">
            {
              "Konnektr is a web3 platform which lets you find connections and grow your network easily and effectively while you earn crypto alongside it."
            }
          </p>
          <div className="flex items-center gap-10 justify-center lg1300:justify-start sm600:my-12 my-10">
            <a
              href="https://tally.so/r/3ja5j4"
              target="_blank"
              rel="noreferrer"
              className="text-white font-medium tracking-widest  button-gradient-1 landing-review2-reverse px-4 py-3 rounded flex items-center gap-2 w-fit hover:scale-105 transition-all duration-300"
              type="button"
            >
              <span className="text-base font-medium font__kaushan tracking-widest">
                Join Waitlist
                {/* Start connecting */}
              </span>
              <HiOutlineArrowNarrowRight size={15} color="white" />
            </a>
            <button
              className="text-white font-medium tracking-widest landing-review2-reverse px-4 py-3 rounded sm600:hover:shadow-whity border flex items-center gap-2 w-fit hover:scale-105 transition-all duration-300"
              type="button"
            >
              <a
                href="https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b"
                target="_blank"
                rel="noreferrer"
                className="text-base font-semibold font__kaushan tracking-widest"
              >
                Learn more
              </a>
            </button>
          </div>
          <div className="flex items-center justify-center lg1300:justify-start">
            <div className="flex items-center sm600:flex-row flex-col sm600:gap-0 gap-10">
              <div className="flex relative sm600:left-0 left-10">
                {[
                  {
                    z: 5,
                    img: "fantomUniverse.png",
                    animClass: "",
                  },
                  {
                    z: 4,
                    img: "buildSpace.jpg",
                    animClass: styles.img1,
                  },
                  {
                    z: 3,
                    img: "marketingMetaverse.jpg",
                    animClass: styles.img2,
                  },
                  {
                    z: 2,
                    img: "learnWeb3Dao.jpg",
                    animClass: styles.img3,
                  },
                  {
                    z: 1,
                    img: "productHouse.jpg",
                    animClass: styles.img4,
                  },
                  {
                    z: 0,
                    img: "web3Learn.jpg",
                    animClass: styles.img5,
                  },
                ].map((item) => (
                  <span
                    className={`reflect relative ${item.animClass}`}
                    style={{ zIndex: item.z }}
                    key={item.img}
                  >
                    <img
                      src={item.img}
                      alt={item.img}
                      className={`w-12 h-12 object-cover rounded-full shadow-whiteArrow hover:shadow-pinkArrow transition-all duration-200 hover:scale-125 cursor-pointer`}
                    />
                  </span>
                ))}
              </div>
              <div className="relative sm600:left-0 left-10">
                <div
                  className={`flex items-center gap-3 relative ${styles.community}`}
                >
                  <BsFillCircleFill size={12.5} color="white" />
                  <span className="font__kaushan font-semibold tracking-wider text-md">
                    Join your favorite Web3 communities
                    {/* Join the Web3 revolution */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`lg1300:col-span-1 col-span-2 relative lg1300:bottom-32 bottom-8 sm600:px-20 lg1300:p-0 xl1500:px-20 lg1300:order-2 order-1 lg1300:h-fit sm600:h-20-rem z-10 ${styles.animate_right}`}
        >
          <div ref={animationContainer} className="sm600:h-full h-60 lg1300:max-w-600px mx-auto"/>
        </div>
      </div>
      <div className="bg-themePink1 bg-opacity-40 absolute rounded-r-full m-auto top-0 bubble_blur" />
      <div className="bg-themeCyan3 bg-opacity-40 absolute rounded-l-full m-auto top-0 right-0 bubble_blur" />
    </div>
  );
};

export default Hero;
