import { Box, Center, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {};

function ProfilePic({}: Props) {
  return (
    <Box
    w={[192, 260, 360, 420]}
    mx="auto"
    mt={[2.5,3]}
    mb={[2.5, 5, 10]}
    /* as={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition="2s" */
      >
      <Image
        alt="profile"
        src="/lucas-parma-profile.png"
        layout="responsive"
        width="192"
        height="192"></Image>
        <Spacer />
    </Box>
  );
}

export default ProfilePic;
