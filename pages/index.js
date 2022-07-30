import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion";
import Nav from '../components/Nav';
import styles from '../assets/css/me.module.scss';


const myLoader = ({ src, width, quality }) => {
  return `/${src}?&w=${width}&q=${quality || 75}`
}


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
        <meta name="Chomphoo LE BEUX" content="Site WEB de Chomphoo LE BEUX" />
        <link rel="icon" href="/logo.png" />
      </Head>


      <motion.div {...transitionValues} >
        <Nav />
      </motion.div>


      <motion.div {...fadeIn2} >
        <main className={styles.container}>
          <Image
            loader={myLoader}
            src="profil.webp"
            alt="Chomphoo LE BEUX"
            width={"211.2px"}
            height={"256px"}
            layout="fixed"
          />


          <div className={styles.container_links}>
            <h1 className={styles.color}>Chomphoo</h1>
            <h2>LE BEUX</h2>
            <span>Développeur</span>
          </div>

        </main>
      </motion.div>
    </>

  )
}

