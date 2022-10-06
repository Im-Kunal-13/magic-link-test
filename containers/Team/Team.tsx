import React from "react";
import { memberLinks } from "../../assets/links";
import MemberCard from "../../components/Team/MemberCard";

import styles from "./Team.module.scss";

const Team = () => {
  return (
    <div
      className="flex items-center flex-col sm:gap-24 gap-10 relative px-2 z-10 xl1800:px-40 xl2000:px-60 xl2400:px-96 lg1300:mb-40 sm600:mb-20 mb-5"
      id="team"
    >
      <h1
        className={`sm800:text-5xl sm400:text-4xl text-3xl tracking-wide font_exo2 font-bold ${styles.title}`}
      >
        Meet Our Team
      </h1>
      <div
        className={`grid grid-cols-6 mt-24 mb-40 md950:mt-0 md950:mb-0 scale-110 gap-10 sm:gap-20 xl1800:gap-10 z-10`}
      >
        {memberLinks.map((member) => (
          <MemberCard member={member} key={member.name} />
        ))}
      </div>
    </div>
  );
};

export default Team;
