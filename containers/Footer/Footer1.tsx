import React from "react";
import { footerLinks } from "../../assets/links";

const Footer1 = () => {
  return (
    <div className="flex flex-col gap-7 items-center lg1300:mt-40 sm600:mt-20 mt-5 bg-introCardBg">
      <div className="flex items-center gap-3 mt-10">
        <span className="sm600:text-3xl text-2xl tracking-wide font_exo2 font-extrabold gradient-text-logo relative bottom-1">
          KONNEKTR
        </span>
      </div>
      <div className="flex sm600:gap-7 gap-5 items-center">
        {[
          { label: "Home", link: "" },
          { label: "About", link: "" },
          { label: "Services", link: "" },
          { label: "Blog", link: "" },
          { label: "Contact", link: "" },
        ].map((item) => (
          <span
            key={item.label}
            className="text-gray-400 hover:text-white font_sfpro tracking-widest font-bold leading-loose sm600:text-lg text-xs cursor-pointer transition-all duration-500"
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="flex gap-10 items-center">
        {footerLinks.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2.5 sm600:text-xl text-lg border-gray-400 hover:border-white border-2 text-gray-400 hover:text-white sm600:hover:scale-110 transition-all duration-500 cursor-pointer"
            key={item.label}
          >
            <item.Icon />
          </a>
        ))}
      </div>
      <div className="flex gap-2 items-center bg-black bg-opacity-10 sm600:py-10 py-7 w-full h-full relative justify-center">
        <div
          className="w-full bg-white bg-opacity-5 absolute top-0"
          style={{ height: "1px" }}
        />
        <span className="text-gray-400 font_sfpro tracking-widest font-bold sm600:text-base text-xs">
          {/* @2022 KonnektrHQ | All rights reserved */}
          Copyright <span className="text-lg">©</span> KonnektrHQ 2022
        </span>
      </div>
    </div>
  );
};

export default Footer1;
