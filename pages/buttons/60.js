import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#60</h1>
          <a className="bn60" href="/buttons/60">
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
            <pre className="prettyprint">{`<a className="bn60" href="/buttons/60">
    Button
</a>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn60 {
  background-color: #190c8d;
  color: #ffffff;
  font-size: 1.3em;
  font-weight: 600;
  position: relative;
  outline: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 55px;
  width: 160px;
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
