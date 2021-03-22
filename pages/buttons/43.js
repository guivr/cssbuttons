import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#43</h1>
          <a href="/buttons/43">
            <button className="btn41-43 btn-43">Button</button>
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
            <pre className="prettyprint">{`<a href="/">
    <button className="btn41-43 btn-43">Button</button>
</a>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.btn41-43 {
  padding: 10px 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.btn-43 {
  border: 2px solid rgb(255, 255, 255);
  z-index: 1;
  color: white;
}

.btn-43:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  background: rgb(255, 255, 255);
  transition: all 0.3s ease;
}

.btn-43:hover {
  color: rgb(0, 0, 0);
}

.btn-43:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
