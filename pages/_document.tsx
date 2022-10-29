/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

function document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <a href="https://getcssscan.com/?ref=cssbuttonsapp_mobile" class="mobile-only">
          <div className="cssscan">
            <img src="https://toastlog.com/img/logos/cssscan.svg" alt="CSS Scan logo" />
            Have you seen CSS Scan? Click to learn more
          </div>
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default document;
