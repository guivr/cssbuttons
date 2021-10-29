import Head from "next/head";
import Panel from "@/components/Panel/Panel.js";
import Viewer from "@/components/Viewer/Viewer.js";

export default function Home() {
  return (
    <div>
      <Head>
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
      </Head>
      <Panel />
      <Viewer />
    </div>
  );
}
