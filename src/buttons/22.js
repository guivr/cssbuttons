import React from "react";
import "./style.css";

function App() {
  return (
    <div id="viewer">
      <div className="f416">
        <h1 className="buttonh1">Button#22</h1>
        <a href="/buttons/22">
          <button className="bn632-hover bn22">Button</button>
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
          <pre className="prettyprint">{`<a href="/"><button className="bn632-hover bn22">Button</button></a>`}</pre>
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

.bn632-hover.bn22 {
    background-image: linear-gradient(
      to right,
      #0ba360,
      #3cba92,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}`}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
