import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#33</h1>
          <a href="/buttons/33">
            <button className="bn33">Button</button>
          </a>
          <h2 className="h2source">
            Creator:{" "}
            <a
              href="https://codepen.io/chriscoyier/pen/ZVYXRx"
              className="avis"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://codepen.io/chriscoyier/pen/ZVYXRx
            </a>
          </h2>
          <div>
            <pre className="prettyprint">{`<a href="/"><button className="bn33">Button</button></a>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn33 {
  border: 5em;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  -webkit-transform: translate(0);
  transform: translate(0);
  background-image: linear-gradient(45deg, #4568dc, #b06ab3);
  padding: 0.7em 2em;
  border-radius: 1px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
  -webkit-transition: box-shadow 0.25s;
  transition: box-shadow 0.25s;
  color: white;
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
