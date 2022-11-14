import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import {
  Box,
  IconButton,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdClearAll } from "react-icons/md";
import { FaBeer } from "react-icons/fa";

type Props = {};

function NavLinks({}: Props) {
  const links = ["about", "skills", "proyectos", "contacto"];
  const [toggle, setToggle] = useState(false);
  return (
    <Box
      as={motion.div}
      initial={{ x: 500, opacity: 0, scale: 0.75 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition="1.5s ">
      <ul className={styles.navbar_links}>
        {links.map((item) => (
          <li key={`link-${item}`}>
            <Link href={`#${item}`} passHref>
              <ChakraLink fontSize={["12px", "16px"]}>{item}</ChakraLink>
            </Link>
          </li>
        ))}
      </ul>

      <Menu>
        <MenuButton
          className={`${styles.navbar_menu} ${styles.menu_hover}`}
          as={IconButton}
          aria-label="Options"
          isRound="true"
          size="sm"
          mr={[2,3]}        
          icon={<MdClearAll />}
          variant="ghost"
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <MenuList>
            <MenuItem icon={<FaBeer />}>New Tab</MenuItem>
            <MenuItem icon={<FaBeer />}>New Window</MenuItem>
            <MenuItem icon={<FaBeer />}>Open Closed Tab</MenuItem>
            <MenuItem icon={<FaBeer />}>Open File...</MenuItem>
          </MenuList>
        )}
      </Menu>
    </Box>
  );
}

export default NavLinks;
