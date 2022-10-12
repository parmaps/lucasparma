import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Circle({}: Props) {
  return (
    <Flex>
      <Box
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 1],
        }}
        transition="2.5s">
        Circle
      </Box>
    </Flex>
  );
}

export default Circle;
