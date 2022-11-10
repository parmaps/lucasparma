import {
  Center,
  Divider,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import styles from "./About.module.scss";

type Props = {};

const About = (props: Props) => {
  return (
    <HStack maxW={[250, 360, 440]}>
      {/* <Divider orientation="vertical" /> */}

      <VStack
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 1.5, 1.8, 1.2, 1],
          opacity: [0.05, 0.15, 0.45, 0.8, 1],
        }}
        transition="2.55s">
        <Text
          className={styles.about}
          fontSize={["14px", "16px", "20px", "26px"]}
          pt={[1, 2, 20]}
          >
          Sobre mí
        </Text>
        <Text className={styles.about_text} fontSize={["sm", "lg", "22px"]}>
          Soy Licenciado en Psicología, y luego de recibirme me enfoqué en
          estudiar programación al sentirme convocado por una disciplina
          más práctica. Así descubrí un mundo fascinante, que me motiva a
          desafiarme y seguir mejorando cada día. Me destaco por aprender
          rápido, mi capacidad de escucha activa y mi nivel de compromiso.{" "}
        </Text>
      </VStack>
    </HStack>
  );
};

export default About;
