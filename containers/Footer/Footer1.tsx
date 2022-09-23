import React from "react";
import { footerLinks } from "../../assets/links";

const Footer1 = () => {
  const scroll2El = (elID: string) => {
    window.scrollTo({
      //@ts-ignore
      top: document.getElementById(elID).offsetTop - 60,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col gap-7 items-center lg1300:mt-40 sm600:mt-20 mt-5 bg-introCardBg">
      <div className="flex items-center gap-3 mt-10">
        <span className="sm600:text-3xl text-2xl tracking-wide font_exo2 font-extrabold gradient-text-logo relative bottom-1">
          KONNEKTR
        </span>
      </div>
      <div className="flex sm600:gap-7 gap-5 items-center">
        {[
          { label: "Home", link: "navbar", type: "id" },
          { label: "About", link: "earn", type: "id" },
          { label: "Team", link: "team", type: "id" },
          { label: "Contact", link: "contact", type: "id" },
          {
            label: "More",
            link: "https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b",
            type: "link",
          },
        ].map((item) =>
          item.type === "link" ? (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white font_sfpro tracking-widest font-bold sm600:text-lg text-xs cursor-pointer transition-all duration-500"
            >
              {item.label}
            </a>
          ) : (
            <button
              className="text-gray-400 hover:text-white font_sfpro tracking-widest font-bold sm600:text-lg text-xs cursor-pointer transition-all duration-500"
              key={item.label}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault();
                scroll2El(item.link);
              }}
            >
              {item.label}
            </button>
          )
        )}
      </div>
      <div className="flex sm600:gap-10 gap-6 items-center">
        {footerLinks.map((item: any) => (
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
