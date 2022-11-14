import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Proyectos.module.scss";

type Props = { title: string; desc: string; image: any };

export default function ProyectosCard(props: Props) {
  return (
    <Box
    className={styles.card}
      p={[1, 3, 5]}
      m={[1, 3, 5]}
      minW={[100, 200, 300]}
      minH={[100, 200, 300]}>
      <Heading fontSize="xl">{props.title}</Heading>
      <Text mt={4}>{props.desc}</Text>
    </Box>
  );
}
