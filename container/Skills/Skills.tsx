import React from "react";
import styles from "./Skills.module.scss";
import {
  cssIcon,
  djangoIcon,
  expressIcon,
  firebaseIcon,
  flaskIcon,
  gitHubIcon,
  gitIcon,
  htmlIcon,
  javaScriptIcon,
  mongoIcon,
  nextIcon,
  nodeIcon,
  psqlIcon,
  pythonIcon,
  reactIcon,
  reduxIcon,
  sassIcon,
  sequelizeIcon,
  typeScript,
} from "../../public/svg/techIcons";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className={styles.container}>
      <Box
        mb={[1.5, 2.5, 3.5]}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 1.5, 1.8, 1.2, 1],
          opacity: [0.05, 0.15, 0.45, 0.8, 1],
        }}
        transition="2.55s">
        <Text
          className={styles.title}
          fontSize={["14px", "16px", "20px", "26px"]}
          pt={[1]}>
          MIS SKILLS
        </Text>
      </Box>
      <div className={styles.front_end_cont}>
        <p>FRONT-END</p>
        <div className={styles.front_end}>
          {/* <div className={styles.vertical_cont}> */}
          {javaScriptIcon} {reactIcon} {reduxIcon} {htmlIcon} {cssIcon}{" "}
          {sassIcon}
          {/* </div> */}
        </div>
      </div>
      <div className={styles.back_end_cont}>
        <p>BACK-END</p>
        <div className={styles.back_end}>
          {pythonIcon} {djangoIcon} {flaskIcon} {nodeIcon} {expressIcon}
        </div>

        <div className={styles.back_end}>
          {sequelizeIcon} {mongoIcon} {nextIcon} {firebaseIcon} {psqlIcon}
        </div>
      </div>
      <div className={styles.others_cont}>
        <p>OTRAS</p>
        <div className={styles.others}>
          {typeScript} {gitIcon} {gitHubIcon}{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Skills;
