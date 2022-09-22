import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { social1 } from "../../assets/lottie";
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
    <div className="relative xl1800:px-40 lg1300:mb-0 sm600:mb-20 mb-5 mx-auto" id="hero" style={{minHeight: "650px", maxWidth: "1900px"}}>
      <div className="lg1100:mt-28 grid grid-cols-2 lg:px-0 xl6:pr-40">
        <div
          className={`text-center lg1100:text-start lg1100:col-span-1 col-span-2 lg1100:pl-20 xl1500:pl-36 flex flex-col lg1100:gap-0 sm400:gap-2 px-2 lg1100:order-1 order-2 relative lg1100:bottom-0 sm400:bottom-20 bottom-32 z-10 ${styles.animate_left}`}
        >
          <h1
            className={`font_exo2 font-extrabold lg1100:text-5xl sm600:text-40px sm400:text-2xl text-xl gradient-text-logo lg1100:min-w-600`}
            style={{lineHeight: "1.2"}}
          >
            Network And Find Valuable Web 3.0 Connections
          </h1>
          <p className="text-gray-400 font_sfpro md800:mt-10 mt-5 sm600:text-lg text-xs font-bold lg1350:pr-10 tracking-widest leading-relaxed">
            {
              "Konnektr is a web3 platform which lets you find connections and grow your network easily and effectively while you earn crypto alongside it."
            }
          </p>
          <div className="flex items-center gap-10 justify-center lg1100:justify-start sm600:my-12 my-10">
            <a
              href="https://tally.so/r/3ja5j4"
              target="_blank"
              rel="noreferrer"
              className="text-white tracking-widest text-lg font-bold font_sfpro button-gradient-1 px-5 py-2.5 rounded w-fit hover:scale-105 transition-all duration-500"
              type="button"
            >
              Join Waitlist
            </a>
            <a
              href="https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white tracking-widest text-lg font-bold font_sfpro border border-gray-400 px-5 py-2.5 rounded w-fit hover:scale-105 transition-all duration-500"
              type="button"
            >
              Learn more
            </a>
          </div>
          <div className="flex items-center justify-center lg1100:justify-start">
            <div className="flex items-center sm600:flex-row flex-col sm600:gap-0 gap-10">
              <div className="flex relative sm600:left-0 left-10 w-72">
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
                    className={`relative ${item.animClass}`}
                    style={{ zIndex: item.z }}
                    key={item.img}
                  >
                    <img
                      src={item.img}
                      alt={item.img}
                      className={`w-12 h-12 object-cover rounded-full shadow-whiteArrow`}
                    />
                  </span>
                ))}
              </div>
              <div className="relative sm600:left-0 left-10">
                <div
                  className={`flex items-center gap-3 relative ${styles.community}`}
                >
                  <BsFillCircleFill size={12.5} color="white" />
                  <span className="text-white font_sfpro text-base font-semibold tracking-wider leading-relaxed whitespace-nowrap">
                    Join your favorite Web3 communities
                    {/* Join the Web3 revolution */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`lg1100:col-span-1 col-span-2 relative lg1100:bottom-32 sm400:bottom-20 bottom-24 lg1100:p-0 lg1100:order-2 order-1 lg1100:h-fit h-450px z-10`}
        >
          <div
            ref={animationContainer}
            className="h-full lg1100:max-w-600px mx-auto"
          />
        </div>
      </div>
      <div className="bg-themePink1 bg-opacity-40 absolute rounded-r-full m-auto top-0 bubble_blur" />
      <div className="bg-themeCyan3 bg-opacity-40 absolute rounded-l-full m-auto top-0 right-0 bubble_blur" />
    </div>
  );
};

export default Hero;
