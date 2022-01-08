import "../styles/globals.css";
import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>cssbuttons.app | Over 60+ Free CSS Buttons To Use</title>
        <meta
          name="description"
          content="Collection of over 60+ handpicked and custom made CSS buttons for your website."
        />
        <meta
          name="keywords"
          content="cssbuttons.app, cssbuttons, css buttons, css button, button css, buttons css, button html css, button"
        />
        <meta name="author" content="Jack Latimer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
