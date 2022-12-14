import { motion } from "framer-motion";
import React from "react";
import styles from "../../styles/Home.module.scss";

type Props = {};

const WaveMiddle = (props: Props) => {
  const svgVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        loop: Infinity,
        ease: "linear",
        duration: 5,
      },
    },
  };

  const pathVariants1 = {
    hidden: { x: "0px", pathLength: 0 },
    visible: {
      x: "-50px",
      pathLength: 1,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 60,
      },
    },
  };

  const pathVariants2 = {
    hidden: { x: "0px", y: "0px", pathLength: 0 },
    visible: {
      x: "-500px",
      y: "-200px",
      pathLength: 1,
      opacity: 0.9,
      transition: {
        repeat: Infinity,
        ease: "easeIn",
        duration: 60,
      },
    },
  };

  const pathVariants3 = {
    hidden: { x: "00px", y: "0px", pathLength: 0 },
    visible: {
      x: "-500px",
      y: "-100px",
      pathLength: 1,
      opacity: 0.9,
      transition: {
        repeat: Infinity,
        ease: "easeIn",
        duration: 60,
      },
    },
  };

  return (
    <div className={styles.wave_middle}>
      <motion.svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        // variants={svgVariants}
        initial="hidden"
        animate="visible">
        <motion.path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className={styles.shape_fill2}
          // variants={pathVariants1}
        />
        <motion.path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity="0.3"
          className={styles.shape_fill}
          // variants={pathVariants2}
        />
        <motion.path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity="0.2"
          className={styles.shape_fill}
          // variants={pathVariants3}
        />
      </motion.svg>
    </div>
  );
};

export default WaveMiddle;
