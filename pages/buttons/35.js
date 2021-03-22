import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
    <div id="viewer">
      <div className="f416">
        <h1 className="buttonh1">Button#35</h1>
        <a href="/buttons/35">
          <h4 className="bn35">Button</h4>
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
          <pre className="prettyprint">{`<a href="/"><h4 className="bn35">Button</h4></a>`}</pre>
        </div>
        <div>
          <pre className="prettyprint">{`.bn35 {
  text-decoration: underline;
}`}</pre>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Button;