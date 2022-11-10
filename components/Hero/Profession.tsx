import styles from "./Profession.module.scss";
import { Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Circle({}: Props) {
  return (
    <Center
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1],
      }}
      transition="2.5s">
      <Text className={styles.developer} fontSize={['15px', '18px', '20px', '22px', '26px']} mt={[0, 1]} mb={[0, 1.5, 3]} p={[1.5, 2, 2.5]}>full stack developer</Text>
    </Center>
  );
}

export default Circle;
