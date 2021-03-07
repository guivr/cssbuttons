import React from "react";
import "./style.css";

function App() {
  return (
    <div id="viewer">
      <div className="f416">
        <h1 className="buttonh1">Button#31</h1>
        <a className="bn31" href="/buttons/31">
          <span className="bn31span">Button</span>
        </a>
        <h2 className="h2source">
          Creator:{" "}
          <a
            href="https://codepen.io/amberweinberg/pen/dzJERg"
            className="avis"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://codepen.io/amberweinberg/pen/dzJERg
          </a>
        </h2>
        <div>
          <pre className="prettyprint">{`<a className="bn31" href="/"><span className="bn31span">Button</span></a>`}</pre>
        </div>
        <div>
          <pre className="prettyprint">{`.bn31 {
  background-image: linear-gradient(to right, #006175 0%, #00a950 100%);
  border-radius: 40px;
  box-sizing: border-box;
  color: #00a84f;
  display: block;
  height: 50px;
  font-size: 1.4em;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 7em;
  z-index: 2;
}

.bn31:hover {
  color: #fff;
}

.bn31 .bn31span {
  align-items: center;
  background: #0e0e10;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;
}

.bn31:hover .bn31span {
  background: transparent;
}`}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
