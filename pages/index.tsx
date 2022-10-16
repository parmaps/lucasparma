import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import {
  About,
  Contact,
  Footer,
  Header,
  Projects,
  Skills,
} from "../container";
import { Navbar } from "../components";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Lucas Parma</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section id="home">
        <Hero />
      </section>

     {/*  <section id="about">
        <About />
      </section> */}

      {/* <Projects />
      <Skills />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default Home;
