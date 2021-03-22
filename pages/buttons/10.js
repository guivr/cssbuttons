import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#10</h1>
          <a href="/buttons/10">
            <button className="w3-button w3-black w3-round-small">
              Button
            </button>
          </a>
          <h2 className="h2source">
            Compatibility:{" "}
            <img
              alt="firefox"
              src="https://img.icons8.com/nolan/45/firefox.png"
            />
            <img
              alt="chrome"
              src="https://img.icons8.com/nolan/45/chrome.png"
            />
            <img
              alt="safari"
              src="https://img.icons8.com/nolan/45/safari.png"
            />
            <img
              alt="ie"
              src="https://img.icons8.com/nolan/45/internet-explorer.png"
            />
          </h2>
          <h2 className="h2source">
            Creator:{" "}
            <a
              href="https://www.w3schools.com/"
              className="avis"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.w3schools.com/
            </a>{" "}
          </h2>

          <div>
            <pre className="prettyprint">{`<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`<a href="/"><button className="w3-button w3-black w3-round-small">Button</button></a>`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
