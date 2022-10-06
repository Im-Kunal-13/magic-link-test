import React from "react";
import { Member } from "../../types";
type Props = { member: Member };

import styles from "./MemberCard.module.scss";

const MemberCard = ({ member }: Props) => {
  return (
    <div
      className={`${styles.member} relative sm600:hover:bottom-5 bottom-0 transition-all duration-500 col-span-6 sm:col-span-3 md950:col-span-2 xl1800:col-span-1 w-60 mx-auto`}
    >
      <div
        className={`${styles.gradient_hover} absolute -z-10 top-0 bottom-0 right-0 m-auto sm600:block hidden transition-all duration-300 rounded-lg`}
        style={{
          width: "calc(100% + 4px)",
          height: "calc(100% + 4px)",
          left: "-2px",
        }}
      />
      <div className="bg-cardBlue2 py-7 rounded-lg flex flex-col items-center gap-2.5">
        <img src={member.img} alt={member.name} className="w-32" />
        <div className="text-center">
          <h1 className="font_sfpro font-bold xl1400:text-3xl text-2xl tracking-wider">
            {member.name}
          </h1>
          <p className="text-cardTextCyan1 text-opacity-50 font_sfpro sm600:text-lg text-base font-semibold tracking-wider leading-relaxed">
            {member.role}
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 content-center">
          {member.socials.map(
            (item: { Icon: any; link: string; color: string }) => (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={item.link}
              >
                <item.Icon
                  size={25}
                  className={`text-gray-400 hover:text-${item.color} transition-all duration-500 hover:scale-125`}
                />
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
