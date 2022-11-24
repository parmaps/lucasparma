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
  const portfolioStack = "React - Next.js - Sass - Framer Motion";
  const gameText =
    "Juego online con tecnología Blockchain. Emisión de Token moneda propio como divisa, y de NFT accesorios a través de Smart Contracts. Vinculado a Metamask. ";
  const gameStack = "React - Next.js - Firebase - Ethers.js";
  const ecommerceText =
    "Tienda de venta de muñecos coleccionables Funko Pop. Incluye registro de usuarios seguro, carrito e historial de compras.";
  const ecommerceStack = "React - Redux - Node - Express - PostgreSQL";
  const tmdbText =
    "Aplicación para búsqueda de películas y series que consume la API de la base de datos audiovisual TMDB. Registro de usuarios con JWT y Bcrypt para seguridad.";
  const tmdbStack = "React - Node - Express - PostgreSQL";

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
        {/* <ProyectosCard
          text={portfolioStack}
          stack={portfolioStack}
          title={"Portfolio"}
          image={
            isMobile
              ? "/proyecto-portfolio-mobile2.png"
              : "/proyecto-portfolio.png"
          }
        /> */}
        <ProyectosCard
          text={gameText}
          stack={gameStack}
          image={
            isMobile
              ? "/proyecto-intergalaxy-mobile.png"
              : "/proyecto-intergalaxy.png"
          }
        />
      </motion.div>
      <motion.div className={styles.cards_cont}>
        <ProyectosCard
          text={ecommerceText}
          stack={ecommerceStack}
          image={
            isMobile ? "/proyecto-funky-mobile.png" : "/proyecto-funky.png"
          }
        />
        <ProyectosCard
          text={tmdbText}
          stack={gameStack}
          image={
            isMobile ? "/proyecto-tmdb-mobile.png" : "/proyecto-tmdb.png"
          }
        />
      </motion.div>
    </motion.div>
  );
};

export default Proyectos;
