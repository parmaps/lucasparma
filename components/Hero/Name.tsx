import React from "react";
import styles from "./Hero.module.scss";
import { Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Name({}: Props) {
  const [text, count] = useTypewriter({
    words: ["LUCAS PARMA"],
    typeSpeed: 44,
  });

  return (
    <Center
    mt={[7, 10]}
      className={styles.hero_name}
      as={motion.div}
      initial={{ opacity: 0.25 }}
      animate={{
        scale: [1, 2, 2, 5, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1],
      }}
      transition="3s">
      <Text fontSize={["20px", "30px", "40px"]} p={[1, 1.5, 2]}>
        {text}
      </Text>
      <Cursor cursorColor="rgb(40, 32, 43)"></Cursor>
    </Center>
  );
}

export default Name;
