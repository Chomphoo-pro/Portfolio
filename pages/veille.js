import Head from 'next/head'
import React from "react";
import Nav from '../components/Nav';
import Veille from '../components/Veille';
import strapi from './api/strapi'


function PageHowTo({data}) {


  return (

    <>
      <Head>
        <title>Chomphoo LE BEUX</title>
        <meta name="description" content="Site WEB de Chomphoo LE BEUX" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Nav />

      <main>
        <h2>Veille</h2>
        <div className="articles">

          {data.map((d) => (<Veille key={d.id} {...d} />))}
        </div>
      </main>

    </>

  )
}


export async function getServerSideProps(req, res) {
  const data = await strapi(process.env.DB_HOST+'/api/rss-its?populate=item')

  return { props: data  }
}


export default PageHowTo;