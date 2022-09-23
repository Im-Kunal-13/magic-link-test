import React from "react";
import { createStyles, Header, Container, Group, Burger } from "@mantine/core";
import classnames from "classnames";
import { useAppStateContext } from "../../context/contextProvider";
import { headerLinks } from "../../assets/links";
import styles from "./Navbar.module.scss";
import { network } from "../../assets/images/index";
import Image from "next/image";
import Link from "next/link";

const HEADER_HEIGHT = 80;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const Navbar = () => {
  const { classes } = useStyles();

  //@ts-ignore
  const { drawerActive, setDrawerActive } = useAppStateContext();

  const getLinkClasses = (id: string) =>
    classnames(
      `py-2 px-5 mx-1 transition-all duration-500 tracking-widest font-bold hover:text-white text-gray-600 nav__link font_sfpro ${
        !(id === "twitter" || id === "discord") && styles.nav__link
      }
      ${
        !(id === "twitter" || id === "discord") && "tracking-wider text-xl"
      } font__kaushan`
    );

  const items = headerLinks.map((link) => {
    return link.type === "route" ? (
      <Link href={link.link} key={link.id}>
        <a className={getLinkClasses(link.id)}>{link.label}</a>
      </Link>
    ) : (
      <a
        key={link.id}
        href={link.link}
        target="_blank"
        rel="noreferrer"
        className={getLinkClasses(link.id)}
      >
        {link.label}
      </a>
    );
  });

  return (
    <div className={styles.app__navbar}>
      <Header
        height={HEADER_HEIGHT}
        className={`w-full bg-transparent border-none py-12 mx-auto`}
        style={{ zIndex: "1000 !important", maxWidth: "1900px" }}
        id={`navbar`}
      >
        <Container
          className={`${classes.header} flex w-full max-w-full sm:px-20 xl1500:px-32 xl1800:px-72 px-5`}
        >
          <div className="flex items-center gap-3">
            <div className="w-14">
              <Image src={network} alt="logo" layout="intrinsic" />
            </div>
            <span className="font_exo2 font-bold lg1100:text-3xl text-2xl gradient-text-logo">
              KONNEKTR
            </span>
          </div>
          <div className="items-center hidden lg1200:flex">
            <Group
              spacing={5}
              className={classes.links}
              style={{ marginRight: "2rem" }}
            >
              {items}
            </Group>

            <div
              className="w-0 h-4 bg-gray-600 rounded-lg mr-14"
              style={{ width: "3px" }}
            />
            <a
              href="https://tally.so/r/3ja5j4"
              target="_blank"
              rel="noreferrer"
              className="text-white tracking-widest text-lg font-bold font_sfpro button-gradient-1 px-5 py-2.5 rounded w-fit hover:scale-105 transition-all duration-500"
              type="button"
            >
              Join Waitlist
            </a>
          </div>

          <Burger
            opened={drawerActive}
            onClick={() => {
              setDrawerActive(!drawerActive);
            }}
            className={`${classes.burger} block lg1200:hidden z-20`}
            size="sm"
            color="#6D31A7"
          />
        </Container>
      </Header>
    </div>
  );
};

export default Navbar;
