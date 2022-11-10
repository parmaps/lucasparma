import { Box, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "./Navbar.module.scss";

type Props = {};

function SocialIcons({}: Props) {
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
      <VStack className={styles.vertical_cont}>
        <SocialIcon
          className={`${styles.menu_hover} ${styles.social_icon}`}
          url="https://www.linkedin.com/in/lucas-parma/"
          fgColor="#D6FDFF"
          bgColor="#235789"
        />
        <SocialIcon
          className={`${styles.menu_hover} ${styles.social_icon}`}
          url="https://github.com/parmaps/"
          fgColor="#D6FDFF"
          bgColor="#235789"
        />
      </VStack>
    </Box>
  );
}

export default SocialIcons;
