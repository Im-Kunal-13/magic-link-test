import { BsTwitter, BsFileCodeFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSocialDistance } from "react-icons/md";
import { Tooltip } from "@mantine/core";
import { FaDiscord, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const headerLinks = [
  {
    link: "/",
    label: "Home",
    id: "home",
    type: "route",
  },
  {
    link: "https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b",
    label: "About",
    id: "about",
    type: "link",
  },
  {
    link: "https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b",
    label: "Team",
    id: "team",
    type: "link",
  },
  {
    link: "https://twitter.com/konnektrhq",
    label: (
      <Tooltip label="Twitter" withArrow offset={15}>
        <div
          className="nav_link_box_shadow_blue rounded-lg hover:scale-110"
          style={{ padding: "10px" }}
        >
          <BsTwitter size={22.5} />
        </div>
      </Tooltip>
    ),
    id: "twitter",
    type: "link",
  },
  {
    link: "https://discord.com/invite/vChz9grSJe",
    label: (
      <Tooltip label="Discord" withArrow offset={15}>
        <div
          className="nav_link_box_shadow_purple rounded-lg hover:scale-110"
          style={{ padding: "10px" }}
        >
          <FaDiscord size={22.5} />
        </div>
      </Tooltip>
    ),
    id: "discord",
    type: "link",
  },
];

export const drawerLinks = [
  { label: "Home", link: "/", Icon: AiFillHome, type: "route" },
  {
    label: "About",
    link: "https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b",
    Icon: MdOutlineSocialDistance,
    type: "link",
  },
  {
    label: "Team",
    link: "https://equal-dill-1d7.notion.site/Konnektr-5a7909f5ec5641e09df5bcda463f7b0b",
    Icon: BsFileCodeFill,
    type: "link",
  },
  {
    label: "Twitter",
    link: "https://twitter.com/konnektrhq",
    Icon: BsTwitter,
    type: "link",
  },
  {
    label: "Discord",
    link: "https://discord.com/invite/vChz9grSJe",
    Icon: FaDiscord,
    type: "link",
  },
];

export const earnLinks = [
  {
    img: "/detective.png",
    label: "Network With People",
    imgClassNames: "sm600:h-28 h-20",
    hoverColor: "pink",
  },
  {
    img: "/handshake.png",
    label: "Connect",
    imgClassNames: "sm600:h-28 h-20 relative sm600:top-0 top-2",
    hoverColor: "purple",
  },
  {
    img: "/community.png",
    label: "Join Community",
    imgClassNames: "sm600:h-28 h-20 relative sm600:top-1 top-2",
    hoverColor: "cyan",
  },
  {
    img: "/medal.png",
    label: "Do Quests",
    imgClassNames: "quests",
    hoverColor: "cyan",
  },
  {
    img: "/gift.png",
    label: "Get Rewards",
    imgClassNames: "sm600:h-28 h-20",
    hoverColor: "purple",
  },
  {
    img: "/airdrop.png",
    label: "Exchange For Airdrops",
    imgClassNames: "airdrop",
    hoverColor: "pink",
  },
];

export const memberLinks = [
  {
    img: "/team_avatar.png",
    name: "Shivraj",
    link: "https://twitter.com/konnektrhq",
    role: "Developer",
    id: "1",
    relativeStyle: {},
  },
  {
    img: "/team_avatar.png",
    name: "Sharath",
    link: "https://twitter.com/konnektrhq",
    role: "Developer",
    id: "2",
    relativeStyle: {},
  },
  {
    img: "/team_avatar.png",
    name: "Kunal",
    link: "https://twitter.com/konnektrhq",
    role: "Developer",
    id: "3",
    relativeStyle: {},
  },
  {
    img: "/team_avatar.png",
    name: "Athul",
    link: "https://twitter.com/konnektrhq",
    role: "Designer",
    id: "4",
    relativeStyle: { bottom: "28px", left: "25px" },
  },
  {
    img: "/team_avatar.png",
    name: "Pranav",
    link: "https://twitter.com/konnektrhq",
    role: "Developer",
    id: "5",
    relativeStyle: { bottom: "28px", right: "25px" },
  },
];

export const faqs = [
  {
    value: "faq1",
    ques: "How can we help ?",
    ans: "Navigate through multiple communities, DAOs and connect with the ones you are interested in.",
  },
  {
    value: "faq2",
    ques: "Cannot find what you are looking for ?",
    ans: "Navigate through multiple communities, DAOs and connect with the ones you are interested in.",
  },
  {
    value: "faq3",
    ques: "How can we help ?",
    ans: "Navigate through multiple communities, DAOs and connect with the ones you are interested in.",
  },
  {
    value: "faq4",
    ques: "How can we help ?",
    ans: "Navigate through multiple communities, DAOs and connect with the ones you are interested in.",
  },
  {
    value: "faq5",
    ques: "How can we help ?",
    ans: "Navigate through multiple communities, DAOs and connect with the ones you are interested in.",
  },
];

export const footerLinks = [
  {
    Icon: FaTwitter,
    label: "Twitter",
    link: "https://twitter.com/konnektrhq",
  },
  {
    Icon: FaDiscord,
    label: "Discord",
    link: "https://discord.com/invite/vChz9grSJe",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    link: "https://www.linkedin.com/company/konnektr/",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/konnektr/",
  },
  {
    Icon: HiMail,
    label: "Mail",
    link: "mailto:konnektrhq@gmail.com",
  },
];
