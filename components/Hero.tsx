import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Circle from "./Circle";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hola, soy Lucas Parma"],
    typeSpeed: 44,
  });

  return (
    <div>
      <Center
        as={motion.div}
        initial={{ opacity: 0.25 }}
        animate={{
          scale: [1, 2, 2, 5, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 1],
        }}
        transition="3s">
        <h1>{text}</h1>
        <Cursor cursorColor="rgb(40, 43, 32)"></Cursor>
      </Center>
      {/* <Circle></Circle> */}
      {/* {<Image alt='profile' src='/lucas-parma-profile.png' width='200' height='200'></Image>} */}
    </div>
  );
}
