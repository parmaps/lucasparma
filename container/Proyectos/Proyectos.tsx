import React from "react";
import styles from "./Proyectos.module.scss";
import ProyectosCard from "./ProyectosCard";
import { motion } from "framer-motion";
import { Box, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = {};

const Proyectos = (props: Props) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.55, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Text
        className={styles.proyectos_title}
        fontSize={["14px", "16px", "20px", "26px"]}
        pt={[1]}>
        mis proyectos
      </Text>
      <motion.div
        className={styles.cards_cont}
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 1.55, ease: "easeInOut" }}
        // viewport={{ once: false, amount: 0.3 }}
        >
        <ProyectosCard
          title={"Portfolio"}
          desc={"Mi portfolio"}
          image={"/proyecto-portfolio.png"}
        />
        <ProyectosCard
          title={"Portfolio"}
          desc={"Mi portfolio"}
          image={"/proyecto-portfolio.png"}
        />
      </motion.div>
      <motion.div
        className={styles.cards_cont}
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 1.55, ease: "easeInOut" }}
        // viewport={{ once: false, amount: 0.4 }}
        >
        <ProyectosCard
          title={"Portfolio"}
          desc={"Mi portfolio"}
          image={"/proyecto-portfolio.png"}
        />
        <ProyectosCard
          title={"Portfolio"}
          desc={"Mi portfolio"}
          image={"/proyecto-portfolio.png"}
        />
      </motion.div>

      {/* <div className={styles.cards_cont}>
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
      </div> */}
    </motion.div>
  );
};

export default Proyectos;
