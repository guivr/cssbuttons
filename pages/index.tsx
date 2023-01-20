import Head from "next/head";
import Buttons from "../components/Buttons/Buttons";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Buttons />
    </>
  );
}
