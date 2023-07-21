import { Box, HStack, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "./Footer.module.scss";

type Props = {};

function SocialIconsFooter({}: Props) {
  return (
    <Box
      as={motion.div}
      pt={1}
      pb={1}
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition="1.5s "
      // transitionDelay="1.5s"
      >
      <HStack className={styles.icons_cont}>
        <SocialIcon
          className={`${styles.menu_hover} ${styles.social_icon}`}
          url="https://www.linkedin.com/in/lucas-parma/"
          fgColor="#D6FDFF"
          bgColor="#1a4278"
        />
        <SocialIcon
          className={`${styles.menu_hover} ${styles.social_icon}`}
          url="https://github.com/parmaps/"
          fgColor="#D6FDFF"
          bgColor="#1a4278"
        />
        <SocialIcon
          className={`${styles.menu_hover} ${styles.social_icon}`}
          url="mailto:l.parma93@gmail.com"
          fgColor="#D6FDFF"
          bgColor="#1a4278"
        />
        <a
        href="/files/cv-lucas-parma-full-stack.pdf"
        // target="_blank"
        rel="noopener noreferrer"
        target="_blank"
        download>
        <p className={` ${styles.footer_text} ${styles.cv_hover} `}>CV</p>
      </a>  
      </HStack>
    </Box>
  );
}

export default SocialIconsFooter;

