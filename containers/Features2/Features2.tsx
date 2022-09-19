import React from "react";
import { FaCopyright, FaEthereum, FaUsers } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import styles from "./Features2.module.scss";

type cardProps = { Icon: any; label: string; desc: string; shadow: string };

export const FeatureCard = (props: cardProps) => (
  <div
    className={`bg-featureCardBg rounded-2xl hover:shadow-${props.shadow} sm600:hover:bottom-5 bottom-0 relative transition-all duration-300 cursor-pointer px-8`}
    style={{ width: "350px", height: "300px" }}
  >
    <div className={`relative ${styles.icon} z-10`}>
      <div className="absolute w-1/2 h-1/2 top-5 rounded-full bg-themeCyan3 bg-opacity-40 blur-xl z-20" />
      <props.Icon style={{ fill: "url(#blue-gradient)" }} />
    </div>
    <div
      className={`z-10 relative bottom-11 flex flex-col items-center text-center gap-2`}
    >
      <h2 className="font_exo2 font-bold sm600:text-3xl text-xl tracking-wide">
        {props.label}
      </h2>
      <p className="text-cardTextCyan1 font_sfpro tracking-widest font-semibold leading-loose text-base">
        {props.desc}
      </p>
    </div>
  </div>
);

export const FeatureCard1 = (props: cardProps) => (
  <div
    className={`${styles.card_body} relative sm600:hover:bottom-5 bottom-0 transition-all duration-500 cursor-pointer lg1300:scale-100 scale-90 `}
  >
    <div
      className={`${styles.gradient_hover} absolute rounded-2xl top-0 z-0 bottom-0 right-0 m-auto transition-all`}
      style={{
        width: "calc(100% + 4px)",
        height: "calc(100% + 4px)",
        left: "-2px",
        clipPath:
          "polygon(30% 0, 52% 34%, 70% 0, 100% 0, 100% 100%, 0 100%, 0 0)",
      }}
    />
    <div
      className={`bg-cardBlue2 rounded-2xl  relative  px-8 z-10`}
      style={{ width: "350px", height: "300px" }}
    >
      <div className={`relative ${styles.icon} z-10`}>
        <div className="absolute w-1/2 h-1/2 top-5 rounded-full bg-themeCyan3 bg-opacity-40 blur-xl z-20" />
        <props.Icon style={{ fill: "url(#blue-gradient)" }} />
      </div>
      <div
        className={`z-10 relative bottom-11 flex flex-col items-center text-center gap-2`}
      >
        <h2 className="font_exo2 font-bold sm600:text-3xl text-xl tracking-wide">
          {props.label}
        </h2>
        <p className="text-cardTextCyan1 font_sfpro tracking-widest font-semibold leading-loose text-base">
          {props.desc}
        </p>
      </div>
    </div>
  </div>
);

const Features2 = () => {
  return (
    <div
      className="flex items-center flex-col lg1100:gap-24 gap-10 lg1300:mt-60 sm600:mt-20 mt-5 relative px-40 z-10 xl1800:px-40 xl2000:px-60 xl2400:px-96"
      id="features"
    >
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#10F3F6" offset="0%" />
          <stop stopColor="#6D31A7" offset="50%" />
          <stop stopColor="#EE34D9" offset="100%" />
        </linearGradient>
      </svg>
      <h1
        className={`sm600:text-5xl text-4xl tracking-wide font_exo2 font-bold lg1100:mb-0 mb-5 ${styles.title}`}
      >
        Features
      </h1>
      <div className="flex items-center lg1300:gap-20 gap-5 z-10 lg1100:flex-row flex-col">
        {[
          {
            Icon: FaEthereum,
            label: "ETHER",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse recusandae vel ea impedit rerum sunt?",
            shadow: "cardHoverCyan1",
          },
          {
            Icon: MdSecurity,
            label: "SECURITY",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse recusandae vel",
            shadow: "cardHoverBlue1",
          },
          {
            Icon: FaUsers,
            label: "COMMUNITY",
            desc: "Build a community around your Exclusive Content with High Engagement",
            shadow: "cardHoverPink2",
          },
        ].map((card) => (
          <FeatureCard1
            Icon={card.Icon}
            desc={card.desc}
            label={card.label}
            shadow={card.shadow}
            key={card.label}
          />
        ))}
      </div>
      <div className="flex items-center lg1300:gap-20 gap-5 z-10 lg1100:flex-row flex-col">
        {[
          {
            Icon: RiMoneyDollarCircleFill,
            label: "MONETIZATION",
            desc: "Monetization tool where Fans can also participate in the growth of the community",
            shadow: "cardHoverCyan1",
          },
          {
            Icon: FaCopyright,
            label: "OWNERSHIP",
            desc: "Unlike other social media which are owned by one central entity, here you own 100% of the content",
            shadow: "cardHoverPink2",
          },
        ].map((card) => (
          <FeatureCard1
            Icon={card.Icon}
            desc={card.desc}
            label={card.label}
            shadow={card.shadow}
            key={card.label}
          />
        ))}
      </div>
      <div className="bg-themePink1 bg-opacity-40 absolute rounded-r-full m-auto top-0 bottom-0 left-0 bubble_blur" />
      <div className="bg-themeCyan3 bg-opacity-40 absolute rounded-l-full m-auto top-0 bottom-0 right-0 bubble_blur" />
    </div>
  );
};

export default Features2;
