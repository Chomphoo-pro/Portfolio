import Head from 'next/head'
import { motion } from "framer-motion";
import Nav from '../components/Nav';
import Contact from '../components/Contact';


const fadeIn2 = {
  initial: { opacity: 0.01 },
  animate: { opacity: 1 },
  transition: {
    duration: 1,
  }
};

const transitionValues = {
  initial: { /*top: "-100px",*/ opacity: 0.01 },
  animate: { /*top: "0px",*/ opacity: 1 },
  transition: {
    duration: 0.5,
    delay: 1
  }
};


export default function Home() {
  return (
    <>
      <Head>
        <title>Chomphoo LE BEUX</title>
        <meta name="description" content="Site WEB de Chomphoo LE BEUX" />
        <link rel="icon" href="/logo.png" />
      </Head>


      <motion.div {...transitionValues} >
        <Nav />
      </motion.div>


      <motion.div {...fadeIn2} >
        <Contact />
      </motion.div>


    </>

  )
}

