import React from "react";
import styles from "./Hero.module.scss";
import { Center, chakra, shouldForwardProp, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const ChakraCenter = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function Name({}: Props) {
  const [text, count] = useTypewriter({
    words: ["LUCAS PARMA"],
    typeSpeed: 44,
  });

  return (
    <Center>
      <ChakraCenter
        mt={[5, 10]}
        className={styles.hero_name}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        initial={{ opacity: 0.25 }}
        animate={{
          scale: [1, 2, 2, 5, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 1],
        }}
        transition="3s ease"
        // transition={{
        //   duration: 3,
        //   ease: "linear",
        //   // repeat: Infinity,
        //   // repeatType: "reverse",
        // }}
      >
        <Text
          fontSize={["20px", "40px", "60px"]}
          p={[1, 1.5]}
          >
          {text}
        </Text>
        {/* <Cursor cursorColor="rgb(40, 32, 43)"></Cursor> */}
      </ChakraCenter>
    </Center>
  );
}

export default Name;
