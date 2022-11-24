import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Proyectos.module.scss";

type Props = { image: any; text: string, stack: string };

export default function ProyectosCard(props: Props) {
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

  // const [isAnimatedMobile, setIsAnimatedMobile] = useState(false);
  // const handleAnimation = () => {
  //   console.log("handling mobile animation");
  //   setIsAnimatedMobile(!isAnimatedMobile);
  // };

  // // Animation variants
  // const variants = { visible: { scale: 0.5 }, hidden: { opacity: 1 } };

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
  // Mobile animation
  // else {
  //   animationProps = {
  //     // onClick: handleAnimation,
  //     // initial: false,
  //     // animate: isAnimatedMobile ? "visible" : "hidden",
  //     // variants: variants,
  //     whileFocus: {
  //       scale: 1.2,
  //       transition: { duration: 1 },
  //     },
  //   };
  // }

  return (
    <Box
      as={motion.div}
      className={styles.card}
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
      <Image
        className={styles.card_image}
        alt="profile"
        src={props.image}
        layout="responsive"
        width={width}
        height={height}></Image>
      <Text className={styles.card_text}>{props.text}</Text>
      <Text className={styles.card_text}>{`Tecnologías: ${props.stack}`}</Text>
    </Box>
  );
}
