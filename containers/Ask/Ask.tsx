import React, { useEffect, useRef } from "react";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { question } from "../../assets/lottie";
import { question1 } from "../../assets/lottie";
import Lottie from "lottie-web";

const Ask = () => {
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
      animationData: question1,
    });

    //@ts-ignore
    return () => anim.current?.destroy();
  }, []);
  return (
    <div
      className="relative xl1800:px-40 xl2000:px-60 xl2400:px-96"
      id="discover"
    >
      <div className="lg1100:mt-40 mt-0 grid grid-cols-2 lg1100:px-2.5 xl6:pr-40">
        <div
          className={`lg:pl-5 xl1400:pl-32 lg1200:pl-20 lg1100:col-span-1 col-span-2 flex flex-col content-center sm:gap-10 gap-5 px-2 relative z-10 lg1100:items-start items-center lg1100:text-start text-center justify-center lg1100:order-2 `}
        >
          <h1 className="font_exo2 font-bold lg1300:text-5xl sm600:text-40px text-2xl whitespace-nowrap">
            Have Something To Ask ?
          </h1>
          <p className="text-gray-400 font_sfpro sm600:text-lg text-base font-semibold lg1300:pr-10 tracking-widest leading-relaxed">
            {
              "We understand its hard to digest so much altogether. So, you may email us, drop a DM or hoop in a call with and we will be glad to help you."
            }
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:konnektrhq@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white tracking-widest text-xl font-bold font_sfpro button-gradient-1 px-5 py-2.5 rounded w-fit hover:scale-105 transition-all duration-300"
              type="button"
            >
              <HiMail size={22.5} />
              Email us
            </a>
            <a
              href="https://tally.so/r/3ja5j4"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white tracking-widest text-xl font-bold font_sfpro border border-gray-400 px-5 py-2.5 rounded w-fit hover:scale-105 transition-all duration-300"
              type="button"
            >
              <FaPhoneAlt size={20} />
              Book a Call
            </a>
          </div>
        </div>
        <div className="lg1100:col-span-1 col-span-2 lg1100:order-1 order-1 z-10 px-5 lg1100:max-w-full max-w-xl mx-auto relative">
          <div
            ref={animationContainer}
            className=""
            style={{height: "500px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Ask;
