import React from "react";
import { earnLinks } from "../../assets/links";

import styles from "./Earn.module.scss";

const Earn = () => {
  return (
    <div
      className="flex items-center flex-col sm:gap-24 gap-10 relative sm600:bottom-0 bottom-16 px-2 z-10 xl1800:px-40 xl2000:px-60 xl2400:px-96"
      id="earn"
    >
      <h1 className={`sm600:text-5xl sm400:text-4xl text-3xl tracking-wide font_exo2 font-bold ${styles.title}`}>
        How It Works
      </h1>
      <div className="grid grid-cols-6 w-full sm600:gap-x-0 gap-x-2 sm600:gap-y-28 gap-y-10 animate-gap">
        {earnLinks.map((card) => (
          <div
            key={card.label}
            className="md1000:col-span-2 col-span-3 flex items-center justify-center sm600:scale-100 scale-95"
          >
            <div
              className={`sm600:h-56 sm600:w-64 h-44 w-52 relative sm600:hover:bottom-5 bottom-0 transition-all duration-500 ${styles.card_body}`}
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
                <div className="bg-white absolute sm600:h-20 sm600:w-20 h-16 w-16 rounded-full bottom-12 m-auto top-0 left-0 right-0 blur-2xl sm600:opacity-0 opacity-0" />
                <div className="sm600:h-28 h-20 z-10">
                  <img
                    src={card.img}
                    alt={card.label}
                    className={`${card.imgClassNames}`}
                  />
                </div>
                <p
                  className={`tracking-wider leading-9 font-bold text-xs sm600:text-base text-cardTextCyan1 font_sfpro ${styles.card_label}`}
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
