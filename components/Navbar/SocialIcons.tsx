import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styles from "./Navbar.module.scss";

type Props = {}

function SocialIcons({}: Props) {
  return (
    <Box
        as={motion.div}
        pt={1}
        pb={1}
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition="1.5s ">
        <SocialIcon
          className={`${styles.menu_hover}`}
          style={{ height: 30, width: 30, margin: 5 }}
          url="https://www.linkedin.com/in/lucas-parma/"
          fgColor="#D6FDFF"
          bgColor="#235789"
        />
        <SocialIcon
          className={`${styles.menu_hover}`}
          style={{ height: 30, width: 30 }}
          url="https://github.com/parmaps/"
          fgColor="#D6FDFF"
          bgColor="#235789"
        />
      </Box>
  )
}

export default SocialIcons