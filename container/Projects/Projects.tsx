import React from "react";
import styles from "./Projects.module.scss";
import ProyectosCard from "./ProjectsCard";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { projectsData } from "./projectsData";
import ProyectosIframeCard from "./ProjectsIframeCard";

type Props = {};

const Proyectos = (props: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 560 });

  const { portfolio, game, ecommerce, tmdb, spotify } = projectsData;

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.55, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.1 }}>
      <Text
        className={styles.proyectos_title}
        fontSize={["14px", "16px", "20px", "26px"]}
        pt={[1]}>
        mis proyectos
      </Text>
      <motion.div className={styles.cards_cont}>
        <ProyectosIframeCard
          text={spotify.text}
          stack={spotify.stack}
          url={"https://github.com/parmaps/randomfy"}
          iframeUrl={"https://randomfy.vercel.app/"}
          image={
            isMobile
              ? "/proyecto-randomfy-mobile.png"
              : "/proyecto-randomfy.png"
          }
        />
        <ProyectosCard
          text={game.text}
          stack={game.stack}
          url={"https://github.com/parmaps/itesa-nft-game"}
          image={
            isMobile
              ? "/proyecto-intergalaxy-mobile.png"
              : "/proyecto-intergalaxy.png"
          }
        />
      </motion.div>
      <motion.div className={styles.cards_cont}>
        <ProyectosCard
          text={ecommerce.text}
          stack={ecommerce.stack}
          url={"https://github.com/parmaps/FunkyFunkos"}
          image={
            isMobile ? "/proyecto-funky-mobile.png" : "/proyecto-funky.png"
          }
        />
        <ProyectosCard
          text={tmdb.text}
          stack={tmdb.stack}
          url={"https://github.com/parmaps/checkpoint-TMDB-220101"}
          image={isMobile ? "/proyecto-tmdb-mobile.png" : "/proyecto-tmdb.png"}
        />
      </motion.div>
    </motion.div>
  );
};

export default Proyectos;
