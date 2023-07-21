import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SocialIcon } from "react-social-icons";
import styles from "./Projects.module.scss";

type Props = {
  image: any;
  text: string;
  stack: string;
  url: string;
  iframeUrl: string;
};

export default function ProyectosIframeCard(props: Props) {
  const isMobile = useMediaQuery({ maxWidth: 560 });
  const isNotMobile = useMediaQuery({ minWidth: 561 });
  // Set default img width (Desktop width)
  const [width, setWidth] = useState("1270");
  const [height, setHeight] = useState("700");

  useEffect(() => {
    if (isMobile) {
      setWidth("700");
      setHeight("1270");
    }
    if (isNotMobile) {
      setWidth("1270");
      setHeight("700");
    }
  });
  let animationProps = {};
  // Desktop animation
  if (isNotMobile) {
    animationProps = {
      whileFocus: {
        scale: 1.2,
        transition: { duration: 1 },
      },
    };
  }

  return (
    <Box
      as={motion.div}
      className={styles.card_iframe}
      w={[275, 420, 500, 550, 622]}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition="1.5s easeInOut"
      viewport={{ once: false, amount: 0.35 }}
      whileFocus={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      {...animationProps}>
      <iframe
        className={styles.card_iframe_media}
        src={props.iframeUrl}
        title={"name"}
      />
      <Text className={styles.card_text}>{props.text}</Text>
      <p className={styles.card_text} style={{ paddingBottom: "0px" }}>
        Tecnologías:{" "}
      </p>
      <Text className={styles.card_text} style={{ paddingTop: "0px" }}>
        {props.stack}
      </Text>
      <span className={styles.card_text}>
        Código:{" "}
        <SocialIcon
          className={`${styles.menu_hover} ${styles.social_icon}`}
          url={props.url}
          fgColor="#D6FDFF"
          bgColor="#1a4278"
        />
      </span>
    </Box>
  );
}
