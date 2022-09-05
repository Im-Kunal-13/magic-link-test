import React from "react";
import { earnLinks } from "../../assets/links";

import styles from "./Earn.module.scss";

const Earn = () => {
  return (
    <div
      className="flex items-center flex-col sm:gap-24 gap-10 lg1300:mt-0 sm600:mt-20 mt-5 relative px-2"
      id="earn"
    >
      {/* <img
        src="/web_bg_purple.png"
        alt="web background"
        className="absolute h-full w-full bottom-24 top-0 m-auto opacity-30"
        style={{ height: "calc(100% + 150px)" }}
      /> */}
      <h1 className={`sm600:text-5xl text-4xl tracking-wide font-exo2 font-bold ${styles.title}`}>
        How It Works
      </h1>
      <div className="grid hidde grid-cols-6 w-full sm600:gap-x-0 gap-x-2 sm600:gap-y-28 gap-y-10 animate-gap">
        {earnLinks.map((card) => (
          <div
            key={card.label}
            className="md1000:col-span-2 col-span-3 flex items-center justify-center sm600:scale-100 scale-95"
          >
            <div
              className={`sm600:h-56 sm600:w-64 h-44 w-52 relative sm600:hover:bottom-5 bottom-0 transition-all duration-300 ${styles.card_body}`}
            >
              <div
                className={`${styles.gradient_hover} absolute rounded-xl z-0 top-0 bottom-0 right-0 m-auto sm600:block hidden transition-all`}
                style={{
                  width: "calc(100% + 4px)",
                  height: "calc(100% + 4px)",
                  left: "-2px"
                }}
              />
              <div
                className={`flex flex-col items-center gap-4 rounded-xl justify-center bg-cardBlue2 ${styles.card} absolute cursor-pointer h-full w-full`}
              >
                <div className="bg-white absolute sm600:h-20 sm600:w-20 h-16 w-16 rounded-full bottom-12 m-auto top-0 left-0 right-0 blur-2xl opacity-80" />
                <div className="sm600:h-28 h-20 z-10">
                  <img
                    src={card.img}
                    alt={card.label}
                    className={`${card.imgClassNames}`}
                  />
                </div>
                <p
                  className={`tracking-wider leading-9 font-medium text-xs sm600:text-base ${styles.card_label}`}
                >
                  {card.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Smaller Devices */}
    </div>
  );
};

export default Earn;
