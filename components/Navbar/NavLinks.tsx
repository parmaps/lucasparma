import React, { useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Link as ChakraLink,
  Menu,
  MenuButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdClearAll } from "react-icons/md";

type Props = {};

function NavLinks({}: Props) {
  const links = ["about", "skills", "proyectos", "contacto"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const drawerVariants = {
    open: { opacity: 0.75 },
    closed: { opacity: 0 },
  };

  return (
    <>
      <Box
        as={motion.div}
        initial={{ x: 0, opacity: 0, scale: 0.75 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition="1.5s">
        <ul className={styles.navbar_links}>
          {links.map((item) => (
            <li key={`link-${item}`}>
              <Link href={`#${item}`} passHref>
                <ChakraLink fontSize={["12px", "16px"]}>{item}</ChakraLink>
              </Link>
            </li>
          ))}
        </ul>

        <button ref={btnRef}></button>

        <Menu>
          <MenuButton
            className={`${styles.navbar_menu}`}
            as={IconButton}
            aria-label="Options"
            isRound="true"
            size="sm"
            mr={[2, 3]}
            _hover={{
              fontWeight: "semibold",
            }}
            _active={{
              backgroundColor: "#122F54",
            }}
            icon={<MdClearAll />}
            variant="ghost"
            ref={btnRef}
            onClick={onOpen}
          />
        </Menu>

        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          size={"xs"}
          // closeOnOverlayClick={true}
          // returnFocusOnClose={true}
          finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent
            maxW={[132, 145]}
            maxH={156}
            className={styles.drawer}>
            <DrawerBody pl={4} pt={9} pr={0} className={styles.drawer}>
              <DrawerCloseButton
                className={styles.drawer_text}
                size={"md"}
              />
              <ul>
                {links.map((item) => (
                  <li
                    key={`link-${item}`}
                    className={styles.drawer_text}
                    onClick={onClose}>
                    <Link href={`#${item}`} passHref>
                      <ChakraLink fontSize={["14px", "16px"]}>
                        {item}
                      </ChakraLink>
                    </Link>
                  </li>
                ))}
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}

export default NavLinks;
