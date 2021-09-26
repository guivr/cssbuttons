import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#45</h1>
          <div>
            <a href="/buttons/45" tabIndex="0">
              <img
                className="bn45"
                src="https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png"
                alt="bn45"
              />
            </a>
          </div>
          <h2 className="h2source">
            Creator:{" "}
            <a
              href="https://github.com/r1"
              className="avis"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/r1
            </a>
          </h2>
          <div>
            <pre className="prettyprint">{`<div><a href="/" tabIndex="0"><img className="bn45" src="https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png"alt="bn45"/></a></div>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn45 {
  width: 170px;
  height: 50px;
}`}</pre>
            <pre className="prettyprint">
              {"https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
