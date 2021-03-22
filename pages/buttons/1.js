import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#1</h1>
          <a href="/buttons/1" className="bn1">
            Button
          </a>

          <h2 className="h2source">
            Creator:{" "}
            <a
              href="https://fdossena.com/?p=html5cool/buttons/i.frag"
              className="avis"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              https://fdossena.com/?p=html5cool/buttons/i.frag
            </a>{" "}
          </h2>
          <div>
            <pre className="prettyprint">{`<a href="/" className="bn1">Button</a>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn1 {
  display: inline-block;
  padding: 0.6em 1.7em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
}

.bn1:hover {
  color: #000000;
  background-color: #ffffff;
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
