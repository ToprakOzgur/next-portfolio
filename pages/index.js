import Head from "next/head";
import { useEffect } from "react";
import { Navbar } from "../components";
import { About, Contact, Header, Skills, Work } from "../container";

import { DataContextProvider } from "../contexts/dataContext";
import { createClient } from "contentful";

export async function getServerSideProps() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // const data = await res.json();

  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_SPACE_KEY,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    host: process.env.NEXT_PUBLIC_HOST,
    //     # HOST: "cdn.contentful.com"
  });
  const projects = await client.getEntries({
    content_type: "project",
    select: "fields",
    order: "fields.order",
  });

  const data = projects.items;

  return { props: { data } };
}

export default function Home({ data }) {
  console.log("data", data);
  return (
    <div className="app">
      <DataContextProvider>
        <Head>
          <title>Ozgur Toprak</title>
          <meta name="description" content="Ozgur Toprak Portfolio" />
          <meta name="keywords" content="Ozgur Toprak, portfolio, frontend, programming, game development, unity,electric, electronic" />
        </Head>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Contact />
        {/* 
      <main className={styles.main}>
        <h1 className={styles.title}></h1>
      </main> */}

        {/* <footer className={styles.footer}>

      </footer> */}
      </DataContextProvider>
    </div>
  );
}
