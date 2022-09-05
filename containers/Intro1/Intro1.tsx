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
    <div className="relative xl1800:px-40 xl2000:px-60 xl2400:px-96" id="intro1">
      <div className="lg1100:mt-40 mt-20 grid grid-cols-2 lg1100:px-2.5 xl6:pr-40">
        <div
          className={`lg:pl-5 xl1500:pl-36 lg1100:col-span-1 col-span-2 flex flex-col content-center sm:gap-10 gap-5 px-2 relative lg1100:top-24 z-10 lg1100:items-start items-center lg1100:text-start text-center`}
        >
          <h1 className="font_exo font-bold lg1300:text-5xl sm600:text-40px text-2xl">
            What does Konnektr do ?
          </h1>
          <p className="text-gray-400 font__inter sm600:text-lg text-base font-semibold lg1300:pr-10 tracking-wider leading-relaxed">
            Konnektr is a web3 platform which lets you find connections and grow
            your network easily and effectively while you earn crypto alongside
            it.
          </p>
          <a
            href="https://tally.so/r/3ja5j4"
            target="_blank"
            rel="noreferrer"
            className="text-white tracking-wider text-xl font-bold font__inter button-gradient-1 landing-review2-reverse px-7 py-2.5 rounded w-fit hover:scale-105 transition-all duration-300"
            type="button"
          >
            Connect
          </a>
        </div>
        <div className="lg1100:flex hidden items-center lg1300:gap-10 gap-5 z-10 justify-center">
          <div className="top-24 relative">
            <img src="/substract1.png" alt="" className=" h-96" />
            <div className="absolute top-0 left-0 right-0 m-auto bottom-0 flex flex-col items-center gap-4 py-8" style={{transform: "scale(.98)"}}>
              <div className="relative w-80% h-11 right-1">
                <div
                  className={`${styles.gradient_hover} absolute rounded-lg z-0 top-0 bottom-0 right-0 m-auto`}
                  style={{
                    width: "calc(100% + 3px)",
                    height: "calc(100% + 3px)",
                    left: "-2px",
                  }}
                />
                <div className="absolute flex items-center gap-2.5 rounded-lg h-full w-full bg-introCardBg px-2.5">
                  <img src="community.png" alt="" className="w-11" />
                  <span className="font__inter lg1300:text-lg lg1200:text-base text-xs font-semibold tracking-wider leading-relaxed">
                    Join Community
                  </span>
                </div>
              </div>
              <div className="relative w-80% h-11 right-1">
                <div
                  className={`${styles.gradient_hover} absolute rounded-lg z-0 top-0 bottom-0 right-0 m-auto`}
                  style={{
                    width: "calc(100% + 3px)",
                    height: "calc(100% + 3px)",
                    left: "-2px",
                  }}
                />
                <div className="absolute flex items-center gap-4 rounded-lg h-full w-full bg-introCardBg px-2.5">
                  <img src="detective.png" alt="" className="w-9" />
                  <span className="font__inter lg1300:text-lg lg1200:text-base text-xs font-semibold tracking-wider leading-relaxed">
                    Join Community
                  </span>
                </div>
              </div>
              <div className="relative w-80% h-11 right-1 flex items-center justify-center my-1">
                <img src="man.png" alt="" className="w-12 relative left-3 z-0" />
                <img src="man.png" alt="" className="w-16 z-10" />
                <img src="man.png" alt="" className="w-12 relative right-3 z-0" />
              </div>
              <div className="relative w-80% h-11 right-1">
                <div
                  className={`${styles.gradient_hover} absolute rounded-lg z-0 top-0 bottom-0 right-0 m-auto`}
                  style={{
                    width: "calc(100% + 3px)",
                    height: "calc(100% + 3px)",
                    left: "-2px",
                  }}
                />
                <div className="absolute flex items-center gap-4 rounded-lg h-full w-full bg-introCardBg px-2.5">
                  <img src="gift.png" alt="" className="w-9" />
                  <span className="font__inter lg1300:text-lg lg1200:text-base text-xs font-semibold tracking-wider leading-relaxed">
                    Get Rewarded
                  </span>
                </div>
              </div>
              <div className="relative w-80% h-20 grid grid-cols-3 gap-2 right-1">
                <div className="relative">
                  <div
                    className={`${styles.gradient_hover} absolute rounded-lg z-0 top-0 bottom-0 right-0 m-auto`}
                    style={{
                      width: "calc(100% + 3px)",
                      height: "calc(100% + 3px)",
                      left: "-2px",
                    }}
                  />
                  <div className="absolute flex flex-col items-center gap-0 rounded-lg h-full w-full lg1300:py-1 py-2 bg-introCardBg">
                    <span className="font__inter lg1300:text-base text-xs font-semibold tracking-wider leading-relaxed">
                      {"NFT's"}
                    </span>
                    <img src="gem.png" alt="" className="w-9" />
                  </div>
                </div>
                <div className="relative">
                  <div
                    className={`${styles.gradient_hover} absolute rounded-lg z-0 top-0 bottom-0 right-0 m-auto`}
                    style={{
                      width: "calc(100% + 3px)",
                      height: "calc(100% + 3px)",
                      left: "-2px",
                    }}
                  />
                  <div className="absolute flex flex-col items-center gap-0 rounded-lg h-full w-full lg1300:py-1 py-2 bg-introCardBg">
                    <span className="font__inter lg1300:text-base text-xs font-semibold tracking-wider leading-relaxed">
                      Airdrops
                    </span>
                    <img
                      src="airdrop.png"
                      alt=""
                      className="w-14 relative bottom-2"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div
                    className={`${styles.gradient_hover} absolute rounded-lg z-0 top-0 bottom-0 right-0 m-auto`}
                    style={{
                      width: "calc(100% + 3px)",
                      height: "calc(100% + 3px)",
                      left: "-2px",
                    }}
                  />
                  <div className="absolute flex flex-col items-center gap-0 rounded-lg h-full w-full lg1300:py-1 py-2 bg-introCardBg">
                    <span className="font__inter lg1300:text-base text-xs font-semibold tracking-wider leading-relaxed">
                      Crypto
                    </span>
                    <img src="money.png" alt="" className="w-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg1300:scale-100 scale-">
            <img src="/substract1.png" alt="" className="h-96" />
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
