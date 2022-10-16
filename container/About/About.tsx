import { Center, Divider, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./About.module.scss";

type Props = {};

const About = (props: Props) => {
  return (
    <Center maxW="560px" mx="auto">
      <Text as="h3" className={styles.about}>
        About
      </Text>
      <Divider orientation="horizontal" />
      <Text className={styles.about_text} fontSize="sm" >
        Siempre fui entusiasta de las computadoras y del aprendizaje. Soy
        Licenciado en Psicología, y luego de recibirme me enfoqué en
        estudiar programación al sentirme convocado por una disciplina más
        práctica. Así descubrí un mundo muy absorbente, que me motiva a
        desafiarme y seguir mejorando cada día.{" "}
      </Text>
    </Center>
  );
};

export default About;
