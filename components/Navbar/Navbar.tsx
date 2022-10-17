import React from "react";
import styles from "./Navbar.module.scss";
import { Flex } from "@chakra-ui/react";
import SocialIcons from "./SocialIcons";
import NavLinks from "./NavLinks";
import Hero from "../Hero/Hero";
import Name from "../Hero/Name";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      maxH="50px"
      className={styles.navbar}>
      <SocialIcons />
      <Name />
      <NavLinks />
    </Flex>
  );
};

export default Navbar;
