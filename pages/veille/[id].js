

import Head from 'next/head';
import { motion } from "framer-motion";
import E404 from '../404';
import Nav from '../../components/Nav';
import strapi from '../api/strapi'
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Title from '../../components/Articles-Title';
import Introduction from '../../components/Articles-Introduction';
import styleIntro from '../../assets/css/center.module.scss';

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0.01,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: easing
    }
  }
};

const fadeIn = {
  initial: { opacity: 0.01 },
  animate: { opacity: 1 },
  transition: {
    duration: 2,
    delay: 0.1,
  }
};

const fadeIn2 = {
  initial: { opacity: 0.01 },
  animate: { opacity: 1 },
  transition: {
    duration: 2,
    delay: 0.6,
  }
};

const transitionValues = {
  initial: { /*top: "-100px",*/ opacity: 0.01 },
  animate: { /*top: "0px",*/ opacity: 1 },
  transition: {
    duration: 0.5,
    delay: 1.5
  }
};

/*
const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};*/

const cardVariants = {
  offscreen: {
    opacity: 0.01
  },
  onscreen: {
    opacity: 1,
    transition: {

      duration: 1.5
    }
  }
};




export default function Product({ data }) {

  if (data.length == 0) {
    return <E404 />
  }



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

      <main>
        <div className={styleIntro.center}>
          <motion.div {...fadeIn}>
            <MDXRemote {...data[0].title} components={{ Title }} />
          </motion.div>
          <motion.div {...fadeIn2}>
            <MDXRemote {...data[0].introduction} components={{ Introduction }} />
          </motion.div>
        </div>


        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
        >
          <motion.div className="card" variants={cardVariants}>

            <MDXRemote {...data[0].summary} />
            <MDXRemote {...data[0].content} />
          </motion.div>
        </motion.div>
      </main>
    </>
  );

}


export async function getServerSideProps(props) {
  var params = props.params
  const datas = await strapi(process.env.DB_HOST+`/api/rss-its?populate=details&filters[slug]=${params.id}`)


  //Text MD to HTML
  const title = await serialize("<Title>" + datas.data[0].attributes?.title + "</Title>");
  const introduction = await serialize("<Introduction>" + datas.data[0].attributes?.details.introduction + "</Introduction>");
  const summary = await serialize(datas.data[0].attributes?.details.summary);
  const content = await serialize(datas.data[0].attributes?.details.content);


  return {
    props: {
      data: [{
        title: title,
        introduction: introduction,
        summary: summary,
        content: content
      }]
    },
  }

}