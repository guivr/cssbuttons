import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#7</h1>
          <a href="/buttons/7" className="bn7">
            Button
          </a>
          <h2 className="h2source">
            Creator:{" "}
            <a
              href="https://github.com/r1"
              className="avis"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/r1
            </a>{" "}
          </h2>
          <div>
            <pre className="prettyprint">{`<a href="/" className="bn7">Hover</a>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn7 {
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #ffffff;
  padding: 0.3em 1.2em;
  border-radius: 30px;
  font-size: 1.2rem;
  color: #000000;
  background-size: 100% 100%;
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
