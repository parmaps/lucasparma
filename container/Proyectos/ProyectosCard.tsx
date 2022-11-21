import { Box, Heading, Text } from "@chakra-ui/react";
import { setDefaultResultOrder } from "dns";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styles from "./Proyectos.module.scss";

type Props = { title: string; desc: string; image: any };

export default function ProyectosCard(props: Props) {
  console.log("image", props.image);
  return (
    <Box
      as={motion.div}
      className={styles.card}
      w={[275, 420, 500, 550, 622]}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition="1.5s easeInOut"
      viewport={{ once: false, amount: 0.35 }}
      // mx="auto"
      // mb={[2.5, 5, 10]}
      // minW={[100, 200, 300]}
      // minH={[100, 200, 300]}
    >
      {/* <Heading className={styles.card_title} fontSize="l">{props.title}</Heading> */}
      {/* <Text className={styles.card_text} mt={4}>{props.desc}</Text> */}
      <Image
        className={styles.card_image}
        alt="profile"
        src={props.image}
        layout="responsive"
        width="1270"
        height="700"></Image>
    </Box>
  );
}
