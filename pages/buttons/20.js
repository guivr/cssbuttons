import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#20</h1>
          <a href="/buttons/20">
            <button className="bn632-hover bn20">Button</button>
          </a>
          <h2 className="h2source">
            Creator:{" "}
            <a
              href="https://codepen.io/JavaScriptJunkie/pen/pPRooV"
              className="avis"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://codepen.io/JavaScriptJunkie/pen/pPRooV
            </a>
          </h2>
          <div>
            <pre className="prettyprint">{`<a href="/"><button className="bn632-hover bn20">Button</button></a>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn632-hover {
  width: 160px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:hover {
  background-position: 100% 0;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:focus {
  outline: none;
}

.bn632-hover.bn20 {
    background-image: linear-gradient(
      to right,
      #667eea,
      #764ba2,
      #6b8dd6,
      #8e37d7
    );
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
