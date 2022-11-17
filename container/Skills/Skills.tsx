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
  typeScriptIcon,
} from "../../public/svg/techIcons";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {

   return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: [0.1, 0.2, 0.35, 0.55, 0.75, 1],
      }}
      // whileInView={{ opacity: 1 }}
      transition={{ duration: 1.55, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.4 }}
      >
        
      <Box
        mb={[1.5, 2.5, 3.5]}
        as={motion.div}
        initial={{ opacity: 0.5 }}
        animate={{
          scale: [0.8, 1.1, 1.3, 1.1, 1],
          opacity: [ 0.8, 1],
        }}
        transition="2.55s">
        <Text
          className={styles.title}
          fontSize={["14px", "18px", "22px", "28px"]}
          pt={[0]}
          mb={2}>
          MIS SKILLS
        </Text>
      </Box>

      {/* FRONT-END SKILLS */}
      <div className={styles.front_end_cont}>
        <p>FRONT-END</p>
        <div className={styles.front_end}>
          <Skill icon={javaScriptIcon} iconName={"JavaScript"}></Skill>
          <Skill icon={reactIcon} iconName={"React"}></Skill>
          <Skill icon={reduxIcon} iconName={"Redux"}></Skill>
          <Skill icon={htmlIcon} iconName={"HTML5"}></Skill>
          <Skill icon={cssIcon} iconName={"CSS3"}></Skill>
          <Skill icon={sassIcon} iconName={"Sass"}></Skill>
        </div>
      </div>

      {/* BACK-END SKILLS */}
      <div className={styles.back_end_cont}>
        <h6>BACK-END</h6>
        <div className={styles.back_end}>
          <Skill icon={pythonIcon} iconName={"Python"}></Skill>
          <Skill icon={djangoIcon} iconName={"Django"}></Skill>
          <Skill icon={flaskIcon} iconName={"Flask"}></Skill>
          <Skill icon={expressIcon} iconName={"Express"}></Skill>
          <Skill icon={firebaseIcon} iconName={"Firebase"}></Skill>
        </div>
        <div className={styles.back_end}>
          <Skill icon={sequelizeIcon} iconName={"Sequelize"}></Skill>
          <Skill icon={nodeIcon} iconName={"Node.js"}></Skill>
          <Skill icon={nextIcon} iconName={"Next.js"}></Skill>
          <Skill icon={mongoIcon} iconName={"MongoDB"}></Skill>
          <Skill icon={psqlIcon} iconName={"PSQL"}></Skill>
        </div>
      </div>

      {/* OTHER SKILLS */}
      <div className={styles.others_cont}>
        <h6>OTRAS</h6>
        <div className={styles.others}>
          <Skill icon={typeScriptIcon} iconName={"TypeScript"}></Skill>
          <Skill icon={gitHubIcon} iconName={"GitHub"}></Skill>
          <Skill icon={gitIcon} iconName={"GIT"}></Skill>
        </div>{" "}
      </div>
    </motion.div>
  );
};

export default Skills;
