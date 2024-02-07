import Image from "next/image";

import NavBar from "./components/NavBar";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="montserrat bg-desert w-full min-h-screen">
        
        <NavBar />
        Home
      </main>
    </>
  );
}
