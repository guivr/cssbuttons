import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#48</h1>
          <a className="bn48" href="/buttons/48">
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
            </a>
          </h2>
          <div>
            <pre className="prettyprint">{`<a className="bn48" href="/">Button</a>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn48 {
  background: linear-gradient(90deg, #1e39a5, #c50e07);
  background-size: auto;
  background-clip: border-box;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 300% 300%;
  -webkit-text-fill-color: transparent;
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
