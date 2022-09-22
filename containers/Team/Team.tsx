import React from "react";
import { memberLinks } from "../../assets/links";
import {
  FaDiscord,
  FaLinkedin,
  FaTwitterSquare,
  FaTwitter,
  FaGithubSquare,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import styles from "./Team.module.scss";

const Team = () => {
  return (
    <div
      className="flex items-center flex-col sm:gap-24 gap-10 relative px-2 z-10 xl1800:px-40 xl2000:px-60 xl2400:px-96 lg1300:mb-40 sm600:mb-20 mb-5"
      id="team"
    >
      <h1
        className={`sm800:text-5xl sm400:text-4xl text-3xl tracking-wide font_exo2 font-bold ${styles.title} hidden`}
      >
        Meet Our Team
      </h1>
      <div
        className={`grid xl1400:gap-10 sm600:gap-5 z-10 ${styles.container}`}
      >
        {memberLinks.map((member) => (
          <div
            className={`flex flex-col items-center gap-5 ${styles.member} ${member.relativeClass} sm600:scale-100 scale-75 relative sm600:static`}
            key={member.id}
          >
            <div
              className={`relative ${styles.avatar} transition-all duration-300 cursor-pointer rounded-full`}
            >
              <div
                className={`${styles.gradient_hover} absolute rounded-full -z-10 top-0 bottom-0 right-0 m-auto sm600:block hidden transition-all duration-300`}
                style={{
                  width: "calc(100% + 6px)",
                  height: "calc(100% + 6px)",
                  left: "-3px",
                }}
              />
              {/* <div
                className={`flex items-center justify-center gap-2 content-center absolute z-10 top-0 bottom-0 right-0 left-0 m-auto bg-white h-full bg-opacity-10 ${styles.social_icons}`}
              >
                <FaTwitterSquare size={25} className="text-twitterBlue"/>
                <FaLinkedin  size={25} className=""/>
                <FaGithubSquare  size={25} className=""/>
                <HiMail  size={25} className=""/>
              </div> */}
              <div
                className={`hidden rounded-full items-center justify-center gap-2 content-center absolute z-10 top-0 bottom-0 right-0 left-0 m-auto ${styles.social_icons}`}
              >
                <div className="relative w-full h-full">
                  <span className="absolute -left-8 -top-5 p-3 rounded-full shadow-whity hover:shadow-twitterBlue transition-all duration-500 hover:scale-110 text-gray-400 hover:text-twitterBlue">
                    <FaTwitter size={20} />
                  </span>
                  <span className="absolute left-6 -top-14  p-3 rounded-full shadow-whity hover:shadow-linkedInBlue transition-all duration-500 hover:scale-110 text-gray-400 hover:text-linkedInBlue">
                    <FaLinkedin size={20} />
                  </span>
                  <span className="absolute right-6 -top-14  p-3 rounded-full shadow-whity transition-all duration-500 hover:scale-110 text-gray-400 hover:text-white">
                    <FaGithubSquare size={20} />
                  </span>
                  <span className="absolute -right-8 -top-5 p-3 rounded-full shadow-whity hover:shadow-gmailRed transition-all duration-500 hover:scale-110 text-gray-400 hover:text-gmailRed">
                    <HiMail size={20} />
                  </span>
                </div>
              </div>
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
                className="font_sfpro font-bold xl1400:text-3xl text-2xl tracking-wider transition-all duration-500 hover:underline cursor-pointer"
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
