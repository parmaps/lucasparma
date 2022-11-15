import { Center, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Proyectos.module.scss";
import ProyectosCard from "./ProyectosCard";

type Props = {};

const Proyectos = (props: Props) => {
  return (
    <div className={styles.container}>
      <Text
        className={styles.proyectos_title}
        fontSize={["14px", "16px", "20px", "26px"]}
        pt={[1]}>
        mis proyectos
      </Text>
      <div className={styles.cards_cont}>
        <ProyectosCard
          title={"Portfolio"}
          desc={"Mi portfolio"}
          image={"image"}
        />
        <ProyectosCard
          title={"Intergalaxy"}
          desc={"Play to earn NFT Game"}
          image={"image"}
        />
        </div>
        
        <div className={styles.cards_cont}>
        <ProyectosCard
          title={"Funky Funkos"}
          desc={"E-commerce"}
          image={"image"}
        />
        <ProyectosCard
          title={"TMDB"}
          desc={"Replica de The Movie Database"}
          image={"image"}
        />
      </div>
    </div>
  );
};

export default Proyectos;
