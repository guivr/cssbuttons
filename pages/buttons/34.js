import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#34</h1>
          <a href="/">
            <button className="bn34">Button</button>
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
            <pre className="prettyprint">{`<a href="/"><button className="bn34">Button</button></a>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn34 {
  background: none;
  cursor: pointer;
  text-decoration: inherit;
  font-size: 1rem;
  color: white;
  padding: 0.7rem 2rem;
  border-image-slice: 1;
  border-image-Creator: linear-gradient(to left, #743ad5, #d53a9d);
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
