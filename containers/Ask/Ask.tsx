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
      className="relative xl1800:px-40 xl2000:px-60 xl2400:px-96 lg1300:mb-60 sm600:mb-20 mb-12"
      id="discover"
    >
      <div className="grid grid-cols-2 lg1100:px-2.5 xl6:pr-40">
        <div
          className={`lg:pl-5 xl1600:pl-32 lg1200:pl-20 lg1100:col-span-1 col-span-2 flex flex-col content-center sm:gap-10 gap-5 px-2 relative sm400:bottom-0 bottom-10 z-10 lg1100:items-start items-center lg1100:text-start text-center justify-center order-2`}
        >
          <h1 className="font_exo2 font-bold sm600:text-5xl sm400:text-4xl text-3xl whitespace-nowrap">
            Get In Touch With Us !
          </h1>
          <p className="text-gray-400 font_sfpro sm600:text-lg text-xs font-semibold lg1300:pr-10 tracking-widest leading-relaxed">
            {
              "We are giving all we have and trying to ship as fast as possible and we want to scale with our partners and collaborators. If you are looking to partner, collaborate, work with us or have something to ask, feel free to contact us and we would be glad to help you."
            }
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:konnektrhq@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white tracking-widest sm600:text-xl  font-bold font_sfpro button-gradient-1 px-5 py-2.5 rounded w-fit hover:scale-105 transition-all duration-500"
              type="button"
            >
              <HiMail size={22.5} />
              Email us
            </a>
            <a
              href="https://calendly.com/konnektr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white tracking-widest sm600:text-xl  font-bold font_sfpro border border-gray-400 px-5 py-2.5 rounded w-fit hover:scale-105 transition-all duration-500"
              type="button"
            >
              <FaPhoneAlt size={20} />
              Book a Call
            </a>
          </div>
        </div>
        <div className="lg1100:col-span-1 col-span-2 z-10 px-5 lg1100:max-w-full max-w-xl mx-auto relative order-1">
          <div
            ref={animationContainer}
            className=""
            style={{ height: "500px" }}
          />
        </div>
      </div>
      <div className="bg-themePink1 bg-opacity-40 absolute rounded-r-full m-auto top-0 bubble_blur" />
      <div className="bg-themeCyan3 bg-opacity-40 absolute rounded-l-full m-auto top-0 right-0 bubble_blur" />
    </div>
  );
};

export default Ask;
