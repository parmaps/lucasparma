import React from "react";
import { Flex } from "@chakra-ui/react";
import styles from "./Footer.module.scss";
import SocialIconsFooter from "./SocialIcons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      height="100px"
      maxH="100px"
      className={styles.footer}>
      <SocialIconsFooter />
    </Flex>
  );
};

export default Footer;
