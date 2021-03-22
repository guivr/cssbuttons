import Head from "next/head";
import "../styles/globals.css";
import "./buttons/styles.css";
import LayoutGA from "@/components/LayoutGA";
import "@/components/Viewer/Viewer.css";
import "@/components/Panel/Panel.css";
import "tailwindcss/tailwind.css";
import SEO from "../next-seo.config";
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutGA>
      <Head>
        <NextSeo
          title="cssbuttons"
          description="cssbuttons is an MIT-licensed open source project full of pure CSS & HTML buttons for developers built-in React"
        />
        <title>cssbuttons.app</title>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link
          rel="icon"
          type="image/png"
          href="https://cssbuttons.app/logo.png"
        />
        <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <meta
          name="google-site-verification"
          content="CetNYcGBpQOungO3wto30N4VIto6PNZjGjkk36NEmtY"
        />
        <DefaultSeo {...SEO} />
      </Head>
      <Component {...pageProps} />
    </LayoutGA>
  );
}

export default MyApp;
