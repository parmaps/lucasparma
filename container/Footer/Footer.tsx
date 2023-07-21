import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import styles from "./Footer.module.scss";
import SocialIconsFooter from "./SocialIconsFooter";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-around"
      height="100px"
      maxH="100px"
      className={styles.footer}>
      <Link href="/">
        <Text className={` ${styles.footer_text} ${styles.copyright} `}>
          Lucas Parma © 2023
        </Text>
      </Link>
      <SocialIconsFooter />
    </Flex>
  );
};

export default Footer;
