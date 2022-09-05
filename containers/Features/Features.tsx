import React from "react";
import { FaEthereum } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";

import styles from "./Features.module.scss";

const Features = () => {
  return (
    <div className="flex items-center flex-col sm:gap-14 gap-10 lg3:px-20 xl6:px-40 mt-40">
      <h1 className="gradient-text-cyan font-bold text-7xl">FEATURES</h1>
      <i className="fa-solid fa-network-wired gradient-text-logo"></i>
      <div className="grid grid-cols-3 gap-10">
        <div className={styles.card}>
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
        <div className={styles.card}>
          <div className={styles.icon}>
            {/* <i className="fa-brands fa-ethereum" /> */}
            {/* <i className="fa fa-ethereum"></i> */}
            <BsCurrencyBitcoin />
          </div>
          <div className={styles.content}>
            <h2 className="font-bold">BITCOIN</h2>
            <p>
              Bitcoin is a decentralized digital currency that can be
              transferred on the peer-to-peer bitcoin network. Bitcoin
              transactions are verified by network nodes through cryptography
              and recorded in a public distributed ledger called a blockchain.
            </p>
          </div>
        </div>
        <div className={styles.card}>
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

export default Features;
