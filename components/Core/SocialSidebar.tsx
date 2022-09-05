import React from "react";
import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

import styles from "./SocialSidebar.module.scss";

const SocialSidebar = () => {
  return (
    <div
      className={`lg1300:grid hidden grid-cols-1 rounded-full shadow-cardWhite1 fixed h-60 top-0 bottom-0 m-auto z-20 overflow-hidden -right-10 ${styles.animate_right}`}
    >
      <a
        href="https://twitter.com/konnektrhq"
        target="_blank"
        rel="noreferrer"
        className="flex items-center px-3 hover:bg-twitterBlue text-twitterBlue hover:text-white transition-all duration-300"
      >
        <FaTwitter size={22.5} />
      </a>
      <a
        href="https://discord.com/invite/vChz9grSJe"
        target="_blank"
        rel="noreferrer"
        className="flex items-center px-3  hover:bg-discordBlue text-discordBlue hover:text-white transition-all duration-300"
      >
        <FaDiscord size={22.5} />
      </a>
      <a
        href="https://discord.com/invite/vChz9grSJe"
        target="_blank"
        rel="noreferrer"
        className="flex items-center px-3  hover:bg-white text-white hover:text-black transition-all duration-300"
      >
        <FaGithub size={22.5} />
      </a>
      <a
        href="https://discord.com/invite/vChz9grSJe"
        target="_blank"
        rel="noreferrer"
        className="flex items-center px-3  hover:bg-youtubeRed text-youtubeRed hover:text-white transition-all duration-300"
      >
        <FaYoutube size={22.5} />
      </a>
    </div>
  );
};

export default SocialSidebar;
