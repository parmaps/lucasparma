import React from "react";
import styles from "./Hero.module.scss";
import { Box, Center, Divider, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Circle from "./Profession";
import ProfilePic from "./ProfilePic";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["LUCAS PARMA"],
    typeSpeed: 44,
  });

  return (
    <div>
      <Center
        className={styles.hero}
        as={motion.div}
        initial={{ opacity: 0.25 }}
        animate={{
          scale: [1, 2, 2, 5, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 1],
        }}
        transition="3s">
        <Text fontSize={['20px', '25px', '30px']} p={[1, 1.5, 2]}>
          {text}
        </Text>
        <Cursor cursorColor="rgb(40, 32, 43)"></Cursor>
      </Center>
      <Circle></Circle>
      <ProfilePic />
    </div>
  );
}
