import Head from "next/head";
import { useEffect } from "react";
import { Navbar } from "../components";
import { About, Contact, Header, Skills, Work } from "../container";

import { DataContextProvider } from "../contexts/dataContext";

// export async function getServerSideProps() {
//   const client = require("contentful").createClient({
//     space: process.env.NEXT_PUBLIC_SPACE_KEY,
//     accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
//     host: process.env.NEXT_PUBLIC_HOST,
//     //     # HOST: "cdn.contentful.com"
//   });
//   const projectsRes = await client.getEntries({
//     content_type: "project",
//     select: "fields",
//     order: "fields.order",
//   });

//   const areasRes = await client.getEntries({
//     content_type: "area",
//     select: "fields",
//     order: "fields.order",
//   });

//   const skillsRes = await client.getEntries({
//     content_type: "skill",
//     select: "fields",
//     order: "fields.name",
//   });

//   const experiencesRes = await client.getEntries({
//     content_type: "exp",
//     select: "fields",
//     order: "fields.order",
//   });

//   const resumeRes = await client.getEntries({
//     content_type: "resume",
//     select: "fields",
//   });
//   const data = {
//     projects: projectsRes.items,
//     areas: areasRes.items,
//     skills: skillsRes.items,
//     experiences: experiencesRes.items,
//     resume: resumeRes.includes?.Asset[0]?.fields?.file?.url,
//   };

//   return { props: { data } };
// }

export default function Home({ data }) {
  return (
    <div className="app">
      <DataContextProvider data={data}>
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
