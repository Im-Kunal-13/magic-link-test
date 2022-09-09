import React from "react";
import { memberLinks } from "../../assets/links";

import styles from "./Team.module.scss";

const Team = () => {
  return (
    <div
      className="flex items-center flex-col sm:gap-24 gap-10 lg1300:mt-0 sm600:mt-20 mt-5 relative px-2 z-10 xl1800:px-40 xl2000:px-60 xl2400:px-96"
      id="team"
    >
      <h1
        className={`sm600:text-5xl text-4xl tracking-wide font_exo2 font-bold ${styles.title}`}
      >
        Meet Our Team
      </h1>
      <div className={`grid xl1400:gap-10 gap-5 z-10 ${styles.container}`}>
        {memberLinks.map((member) => (
          <div
            className={`flex flex-col items-center gap-5 ${styles.member}`}
            key={member.id}
          >
            <div
              className={`relative ${styles.avatar} relative sm600:hover:bottom-5 bottom-0 transition-all duration-300 cursor-pointer`}
            >
              <div
                className={`${styles.gradient_hover} absolute rounded-full -z-10 top-0 bottom-0 right-0 m-auto sm600:block hidden transition-all`}
                style={{
                  width: "calc(100% + 6px)",
                  height: "calc(100% + 6px)",
                  left: "-3px",
                }}
              />
              <a
                className="z-10 h-fit w-fit bg-black rounded-full block"
                href={member.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={member.img}
                  alt=""
                  className="xl1400:w-40 w-32 z-10"
                />
              </a>
            </div>
            <div className="text-center">
              <a
                className="font_sfpro font-bold xl1400:text-3xl text-2xl tracking-wider transition-all duration-300 hover:underline cursor-pointer"
                href={member.link}
                target="_blank"
                rel="noreferrer"
              >
                {member.name}
              </a>
              <p className="text-gray-400 font_sfpro sm600:text-lg text-base font-semibold tracking-wider leading-relaxed">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
