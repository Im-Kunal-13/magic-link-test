import React from "react";
import { FaEthereum, FaUsers, FaParachuteBox } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";

import styles from "./Features1.module.scss";

const Features1 = () => {
  return (
    <div className="flex items-center flex-col sm:gap-14 gap-10 lg1350:px-20 xl1900:px-40 mt-40">
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#10F3F6" offset="0%" />
          <stop stopColor="#6D31A7" offset="50%" />
          <stop stopColor="#EE34D9" offset="100%" />
        </linearGradient>
      </svg>
      <h1 className="gradient-text-cyan font-bold text-7xl">FEATURES</h1>
      <i className="fa-solid fa-network-wired gradient-text-logo"></i>
      <div className="grid grid-cols-6 gap-20">
        <div
          className={`col-span-2 shadow-cardBorderWhite hover:shadow-cardHoverPink2 rounded-20-px rounded-bl-160-px rounded-br-160-px hover:scale-110 transition-all duration-300 cursor-pointer`}
        >
          <div className={`${styles.card}`}>
            <div className={`relative ${styles.icon} z-10`}>
              <div className="absolute w-1/2 h-1/2 top-5 rounded-full bg-themeCyan3 bg-opacity-80 blur-xl z-20" />
              <FaEthereum style={{ fill: "url(#blue-gradient)" }} />
            </div>
            <div className={`${styles.content} z-10`}>
              <h2 className="font-bold">ETHER</h2>
              <p className="text-cardTextCyan1 tracking-wider leading-9 font-medium text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                recusandae vel ea impedit rerum sunt?
              </p>
            </div>
          </div>
        </div>
        <div
          className={`col-span-2 shadow-cardBorderWhite rounded-20-px rounded-bl-160-px rounded-br-160-px hover:scale-110 transition-all duration-300 cursor-pointer`}
        >
          <div className={`${styles.card}`}>
            <div className={`relative ${styles.icon} z-10`}>
              <div className="absolute w-1/2 h-1/2 top-5 rounded-full bg-themeCyan3 bg-opacity-80 blur-xl z-20" />
              <FaUsers
                style={{ fill: "url(#blue-gradient)" }}
                className="z-10"
              />
            </div>
            <div className={`${styles.content} z-10`}>
              <h2 className="font-bold mb-3 text-2xl tracking-wider">
                COMMUNITY
              </h2>
              <p className="text-cardTextCyan1 tracking-wider leading-9 font-medium text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                recusandae vel ea impedit rerum sunt?
              </p>
            </div>
          </div>
        </div>
        <div
          className={`col-span-2 shadow-cardBorderWhite rounded-20-px rounded-bl-160-px rounded-br-160-px hover:scale-110 transition-all duration-300 cursor-pointer`}
        >
          <div className={`${styles.card}`}>
            <div className={`relative ${styles.icon} z-10`}>
              <div className="absolute w-1/2 h-1/2 top-5 rounded-full bg-themeCyan3 bg-opacity-80 blur-xl z-20" />
              <FaParachuteBox
                style={{ fill: "url(#blue-gradient)" }}
                className="z-10 relative top-2"
                size={75}
              />
            </div>
            <div className={`${styles.content} z-10`}>
              <h2 className="font-bold mb-3 text-2xl tracking-wider">
                AIRDROPS
              </h2>
              <p className="text-cardTextCyan1 tracking-wider leading-9 font-medium text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                recusandae vel ea impedit rerum sunt?
              </p>
            </div>
          </div>
        </div>
        <div className={`col-span-3 mx-auto ${styles.card}`}>
          <div className={styles.icon}>
            {/* <i className="fa-brands fa-ethereum" /> */}
            {/* <i className="fa fa-ethereum"></i> */}
            <FaEthereum />
          </div>
          <div className={styles.content}>
            <h2 className="font-bold">ETHER</h2>
            <p>
              Ethereum is a decentralized, open-source blockchain with smart
              contract functionality. Ether is the native cryptocurrency of the
              platform. Among cryptocurrencies, Ether is second only to Bitcoin
              in market capitalization. Ethereum was conceived in 2013 by
              programmer Vitalik Buterin.
            </p>
          </div>
        </div>
        <div className={`col-span-3 mx-auto ${styles.card}`}>
          <div className={styles.icon}>
            {/* <i className="fa-brands fa-ethereum" /> */}
            {/* <i className="fa fa-ethereum"></i> */}
            <FaEthereum />
          </div>
          <div className={styles.content}>
            <h2 className="font-bold">ETHER</h2>
            <p>
              Ethereum is a decentralized, open-source blockchain with smart
              contract functionality. Ether is the native cryptocurrency of the
              platform. Among cryptocurrencies, Ether is second only to Bitcoin
              in market capitalization. Ethereum was conceived in 2013 by
              programmer Vitalik Buterin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features1;
