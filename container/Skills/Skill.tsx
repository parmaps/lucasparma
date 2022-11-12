import React, { ImgHTMLAttributes } from "react";
import { motion } from "framer-motion";
import styles from "./Skill.module.scss";

type Props = { icon: any; iconName: string };

const Skill = (props: Props) => {
  const techNames = {
    hidden: { opacity: 0.55 },
    hover: {
      opacity: 1,
      scale: 1.2,
      transition: {
        duration: 0.5,
        // ease: "linear",
      },
      color: "black",
    },
  };

  return (
    <span className={styles.icon_container}>
      {props.icon}
      <motion.h3
      className={styles.icon_name}
        initial="hidden"
        whileHover="hover"
        animate="visible"
        variants={techNames}>
        {props.iconName}
      </motion.h3>
    </span>
  );
};

export default Skill;