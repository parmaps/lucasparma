import React from "react";
import "./Header.module.scss";
import { SocialIcon } from "react-social-icons";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  const links = ["home", "about", "contact", "skills", "projects"];

  return (
    <Flex maxW="960px" maxH="32px" mx="auto" px="auto">
      <Box
        as={motion.div}
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition="1.5s ">
        <SocialIcon
          style={{ height: 25, width: 25, margin: 5 }}
          url="https://www.linkedin.com/in/lucas-parma/"
          fgColor="#D6FDFF"
          bgColor="#235789"
        />
        <SocialIcon
          style={{ height: 25, width: 25 }}
          url="https://github.com/parmaps/"
          fgColor="#D6FDFF"
          bgColor="#235789"
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
      <nav></nav>

      {/* <Flex>
        <SocialIcon
          network="email"
          fgColor="white"
          bgColor="transparent"
        />
      </Flex> */}
      <Box>
      <ul>
        {links.map((item) => (
          <li key={`link-${item}`}>
            <div/>
            <Link href={`#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      </Box>
    </Flex>
  );
}

export default Header;
