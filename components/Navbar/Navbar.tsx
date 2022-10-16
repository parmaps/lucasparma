import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { SocialIcon } from "react-social-icons";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBeer } from "react-icons/fa";
import { MdClearAll } from "react-icons/md";

type Props = {};

const Navbar = (props: Props) => {
  const links = ["about", "skills", "projects", "contact"];
  const [toggle, setToggle] = useState(false);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      maxH="36px"
      className={styles.navbar}>
      <Box
        as={motion.div}
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition="1.5s ">
        <SocialIcon
          className={`${styles.menu_hover}`}
          style={{ height: 25, width: 25, margin: 5 }}
          url="https://www.linkedin.com/in/lucas-parma/"
          fgColor="#D6FDFF"
          bgColor="#235789"
        />
        <SocialIcon
          className={`${styles.menu_hover}`}
          style={{ height: 25, width: 25 }}
          url="https://github.com/parmaps/"
          fgColor="#D6FDFF"
          bgColor="#235789"
        />
      </Box>
      {/* <Spacer /> */}
      <Box
        as={motion.div}
        initial={{ x: 500, opacity: 0, scale: 0.75 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition="1.5s ">
        <ul className={styles.navbar_links}>
          {links.map((item) => (
            <li key={`link-${item}`}>
              <Link href={`#${item}`}>{item}</Link>
            </li>
          ))}
        </ul>

        <Menu>
          <MenuButton
            className={`${styles.navbar_menu} ${styles.menu_hover}`}
            as={IconButton}
            aria-label="Options"
            icon={<MdClearAll />}
            variant="outline"
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

        {/*  <div className={styles.navbar_menu}>
          <HiMenuAlt4 onClick={() => setToggle(true)}></HiMenuAlt4>

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}>
              <HiX onClick={() => setToggle(false)} />
              {links.map((item) => (
                <li key={item}>
                  <Link href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </motion.div>
          )}
        </div> */}
      </Box>
    </Flex>
  );
};

export default Navbar;
