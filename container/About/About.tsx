import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./About.module.scss";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });

  let animationProps = {};
  if (isNotMobile) {
    animationProps = {
      as: motion.div,
      initial: { opacity: 0.15 },
      animate: { scale: [1, 1.5, 1.8, 1.2, 1], opacity: [0.35, 0.65, 1] },
      transition: "2.55s",
    };
  } else {
    animationProps = {
      as: motion.div,
      initial: { opacity: 0.15 },
      animate: { opacity: [0.3, 0.6, 0.9, 1] },
      transition: "2.55s",
    };
  }

  return (
    <HStack maxW={[251, 386, 410, 430]}>
      <VStack pl={[0, 0, 2, 6]} ml={[0, 0, 1, 2.5]} {...animationProps}>
        <Text
          className={styles.about_title}
          fontSize={["14px", "16px", "20px", "26px"]}
          pt={[1.5]}>
          Sobre mí
        </Text>
        <Text
          className={styles.about_text}
          pb={[5, 6, 2]}
          fontSize={["sm", "lg", "22px"]}>
          Soy un profesional comprometido, meticuloso y con una sólida capacidad
          de comunicación. Destaco además por mi motivación para aprender y mi
          disposición para trabajar en equipo.{" "}
        </Text>
      </VStack>
    </HStack>
  );
};

export default About;
