import { Box, Center, Spacer, StylesProvider } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "./ProfilePic.module.scss";
import { motion } from "framer-motion";

type Props = {};

function ProfilePic({}: Props) {
  return (
    <Box
    className={styles.picture}
    minWidth={[220, 270, 350, 400]}
    w={[192, 260, 340, 380]}
    mx="auto"
    mt={[2.5,3]}
    mb={[2.5, 5, 10]}
    as={motion.div}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition="2s"
      >
      <Image
        alt="profile"
        src="/lucas-parma-profile.png"
        layout="responsive"
        width="192"
        height="192"
        priority
        ></Image>
        <Spacer />
    </Box>
  );
}

export default ProfilePic;
