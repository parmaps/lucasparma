import React from "react";
import { Flex } from "@chakra-ui/react";
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
      <a
        href="/files/cv-lucas-parma.pdf"
        // target="_blank"
        rel="noopener noreferrer"
        download>
        <p className={` ${styles.cv} ${styles.cv_hover} `}>Descargar CV</p>
      </a>
      <SocialIconsFooter />
    </Flex>
  );
};

export default Footer;
