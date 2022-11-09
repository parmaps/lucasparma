import React from "react";
import styles from "./Hero.module.scss";
import { Center, Divider, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Profession from "./Profession";
import ProfilePic from "./ProfilePic";
import Name from "./Name";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["LUCAS PARMA"],
    typeSpeed: 44,
  });

  return (
    <div>
     {/*  <Name/>  */}     
      <Profession />
      <ProfilePic />
    </div>
  );
}
