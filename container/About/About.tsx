import { Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import styles from "./About.module.scss";

type Props = {};

const About = (props: Props) => {
  return (
    <HStack maxW={[250, 340, 380]}>
      <VStack
        pl={[0, 0, 2, 6]}
        ml={[0, 0, 1, 2.5]}
        as={motion.div}
        initial={{ opacity: 0.15 }}
        animate={{
          scale: [1, 1.5, 1.8, 1.2, 1],
          opacity: [0.35, 0.65, 1],
        }}
        transition="2.55s">
        <Text
          className={styles.about_title}
          fontSize={["14px", "16px", "20px", "26px"]}
          pt={[1]}>
          Sobre mí
        </Text>
        <Text
          className={styles.about_text}
          fontSize={["sm", "lg", "22px"]}>
          Soy Licenciado en Psicología, y luego de recibirme me enfoqué en
          estudiar programación al sentirme convocado por una disciplina
          más práctica. Así descubrí un mundo fascinante, que me motiva a
          desafiarme y seguir mejorando cada día. Me destaco por aprender
          rápido, por mi capacidad de escucha activa y mi nivel de compromiso.{" "}
        </Text>
      </VStack>
    </HStack>
  );
};

export default About;
