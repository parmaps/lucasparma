import React, { useState } from "react";
import styles from "./Proyectos.module.scss";
import ProyectosCard from "./ProyectosCard";
import { motion } from "framer-motion";
import { Box, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

type Props = {};

const Proyectos = (props: Props) => {

  const isMobile = useMediaQuery({ maxWidth: 560 });

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.55, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Text
        className={styles.proyectos_title}
        fontSize={["14px", "16px", "20px", "26px"]}
        pt={[1]}>
        mis proyectos
      </Text>
      <motion.div className={styles.cards_cont}>
        <ProyectosCard
          title={"Portfolio"}
          desc={"Mi portfolio"}
          image={isMobile ? "/proyecto-portfolio-mobile2.png" : "/proyecto-portfolio.png" }
        />
        <ProyectosCard
          title={"Portfolio"}
          desc={"Mi portfolio"}
          image={isMobile ? "/proyecto-intergalaxy-mobile.png" : "/proyecto-intergalaxy.png" }
        />
      </motion.div>
      <motion.div className={styles.cards_cont}>
        <ProyectosCard
          title={"Portfolio"}
          desc={"Mi portfolio"}
          image={isMobile ? "/proyecto-funky-mobile.png" : "/proyecto-funky.png" }
        />
        <ProyectosCard
          title={"Portfolio"}
          desc={"Mi portfolio"}
          image={isMobile ? "/proyecto-tmdb-mobile.png" : "/proyecto-tmdb.png" }
        />
      </motion.div>
    </motion.div>
  );
};

export default Proyectos;
