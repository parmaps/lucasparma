import React from "react";
import "./Header.module.scss";
import { SocialIcon } from "react-social-icons";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <Flex maxW="960px" mx="auto" px="auto">
      <Box
        as={motion.div}
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition="1.5s ">
        <SocialIcon
          url="https://www.linkedin.com/in/lucas-parma/"
          fgColor="white"
        />
        <SocialIcon
          url="https://github.com/parmaps/"
          fgColor="white"
          bgColor="transparent"
        />
      </Box>
      <Spacer />
      <Box
        as={motion.div}
        initial={{ x: 500, opacity: 0, scale: 0.75 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition="1.5s ">
        Header
      </Box>

      {/* <Flex>
        <SocialIcon
          network="email"
          fgColor="white"
          bgColor="transparent"
        />
      </Flex> */}
    </Flex>
  );
}

export default Header;
