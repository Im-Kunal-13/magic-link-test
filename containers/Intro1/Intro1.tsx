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
    <div className="relative" id="intro1">
      <div className="lg1300:mt-40 grid grid-cols-2 lg1300:gap-0 gap-10 lg:px-0 xl6:pr-40">
        <div
          className={`text-center lg1300:text-start lg1300:col-span-1 col-span-2 lg1300:pl-14 xl1500:pl-40 flex flex-col gap-10 px-2 lg1300:order-1 order-2 relative top-24 z-10`}
        >
          <h1 className="font_exo font-bold text-5xl">
            What does Konnektr do ?
          </h1>
          <p className="text-gray-400 font__inter text-lg font-semibold lg1300:pr-10 tracking-wider leading-relaxed">
            Konnektr is a web3 platform which lets you find connections and grow
            your network easily and effectively while you earn crypto alongside
            it.
          </p>
          <a
            href="https://tally.so/r/3ja5j4"
            target="_blank"
            rel="noreferrer"
            className="text-white text-xl font-bold font__inter button-gradient-1 landing-review2-reverse px-7 py-2.5 rounded w-fit hover:scale-105 transition-all duration-300"
            type="button"
          >
            Connect
          </a>
        </div>
        <div className="lg1300:col-span-1 col-span-2 lg1300:order-2 order-1 flex items-center gap-10">
          <div className="top-24 relative">
            <img src="/substract1.png" alt="" className=" h-96" />
            <div className="absolute top-0 left-0 right-0 m-auto bottom-0 flex flex-col items-center gap-5 py-10">
              <div className="relative w-75% h-12">
                <div
                  className={`${styles.gradient_hover} absolute rounded-lg z-0 top-0 bottom-0 right-0 m-auto`}
                  style={{
                    width: "calc(100% + 3px)",
                    height: "calc(100% + 3px)",
                    left: "-1.5px",
                  }}
                />
                <div className="absolute flex items-center gap-2.5 rounded-lg h-full w-full bg-introCardBg px-2.5">
                  <img src="community.png" alt="" className="w-11" />
                  <span className="font__inter text-lg font-semibold tracking-wider leading-relaxed">Join Community</span>
                </div>
              </div>
              <div className="relative w-75% h-12">
                <div
                  className={`${styles.gradient_hover} absolute rounded-lg z-0 top-0 bottom-0 right-0 m-auto`}
                  style={{
                    width: "calc(100% + 3px)",
                    height: "calc(100% + 3px)",
                    left: "-1.5px",
                  }}
                />
                <div className="absolute flex items-center gap-4 rounded-lg h-full w-full bg-introCardBg px-2.5">
                  <img src="detective.png" alt="" className="w-9" />
                  <span className="font__inter text-lg font-semibold tracking-wider leading-relaxed">Join Community</span>
                </div>
              </div>
              <div className="relative w-75% h-12">
                <div
                  className={`${styles.gradient_hover} absolute rounded-lg z-0 top-0 bottom-0 right-0 m-auto`}
                  style={{
                    width: "calc(100% + 3px)",
                    height: "calc(100% + 3px)",
                    left: "-1.5px",
                  }}
                />
                <div className="absolute flex items-center gap-4 rounded-lg h-full w-full bg-introCardBg px-2.5">
                  <img src="gift.png" alt="" className="w-9" />
                  <span className="font__inter text-lg font-semibold tracking-wider leading-relaxed">Get Rewarded</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/substract1.png" alt="" className="h-96" />
            <div
              ref={animationContainer}
              className="absolute top-0 left-0 right-0 m-auto bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
