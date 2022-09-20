import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { laptop } from "../../assets/lottie";

import styles from "./Intro1.module.scss";

export const Intro1 = () => {
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
      animationData: laptop,
    });

    //@ts-ignore
    return () => anim.current?.destroy();
  }, []);
  return (
    <div className="relative xl1800:px-40 xl2000:px-60 xl2400:px-96 lg1100:mb-80 mb-52" id="intro1">
      <div className="lg1100:mt-40 sm600:mt-20 grid grid-cols-2 lg1100:px-2.5 xl6:pr-40 ">
        <div
          className={`lg:pl-5 xl1500:pl-36 lg1100:col-span-1 col-span-2 flex flex-col content-center sm:gap-10 gap-5 px-2 relative lg1100:top-24 top-36 z-10 lg1100:items-start items-center lg1100:text-start text-center lg1100:order-1 order-2`}
        >
          <h1 className="font_exo font-bold lg1300:text-5xl sm600:text-40px text-2xl">
            What does Konnektr do ?
          </h1>
          <p className="text-gray-400 font_sfpro sm600:text-lg text-xs font-semibold lg1300:pr-10 tracking-widest leading-relaxed">
            Konnektr is a web3 platform which lets you find connections and grow
            your network easily and effectively while you earn crypto alongside
            it.
          </p>
          <a
            href="https://tally.so/r/3ja5j4"
            target="_blank"
            rel="noreferrer"
            className="text-white sm600:tracking-wider tracking-widest sm600:text-xl text-xs font-bold font_sfpro button-gradient-1 landing-review2-reverse px-7 py-2.5 rounded w-fit hover:scale-105 transition-all duration-500"
            type="button"
          >
            Connect
          </a>
        </div>
        <div className="lg1100:col-span-1 col-span-2 flex items-centerlg1300:gap-10 lg1100:gap-5 sm:gap-10 gap-2.5 z-10 justify-center lg1100:order-2 order-1 sm600:px-0 px-2.5">
          <div className="top-24 relative lg1100:scale-100 scale-7">
            <img src="/introCard.png" alt="" className="xl1400:h-96 lg1100:h-80 sm:h-80 h-52"/>
          </div>
          <div className="relative lg1100:scale-100 scale-7">
            <img src="/substract1.png" alt="" className="xl1400:h-96 lg1100:h-80 sm:h-80 h-52" />
            <div
              ref={animationContainer}
              className="absolute top-0 left-0 right-0 m-auto bottom-0"
            />
          </div>
        </div>
      </div>
      <div className="bg-themePink1 bg-opacity-40 absolute rounded-r-full m-auto top-0 bubble_blur" />
      <div className="bg-themeCyan3 bg-opacity-40 absolute rounded-l-full m-auto top-0 right-0 bubble_blur" />
    </div>
  );
};
