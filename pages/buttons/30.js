import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#30</h1>
          <a href="/buttons/30">
            <button className="bn30">Button</button>
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
            <pre className="prettyprint">{`<a href="/"><button className="bn30">Button</button></a>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn30 {
  border: 5em;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  -webkit-transform: translate(0);
  transform: translate(0);
  background-image: linear-gradient(45deg, #4568dc, #b06ab3);
  padding: 0.7em 2em;
  border-radius: 65px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
  -webkit-transition: box-shadow 0.25s;
  transition: box-shadow 0.25s;
  color: white;
}

.bn30 .text {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #4568dc, #b06ab3);
}

.bn30:after {
  content: "";
  border-radius: 18px;
  position: absolute;
  margin: 4px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: #0e0e10;
}

.bn30:hover {
  background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
  box-shadow: 0 12px 24px rgba(128, 128, 128, 0.1);
}

.bn30:hover .text {
  background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
