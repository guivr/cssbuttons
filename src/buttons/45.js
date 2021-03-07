import React from "react";
import "./style.css";

function App() {
  return (
    <div id="viewer">
      <div className="f416">
        <h1 className="buttonh1">Button#45</h1>
        <div>
          <a href="/buttons/45" tabindex="0">
            <img
              className="bn45"
              src="https://cdn.worldvectorlogo.com/logos/google-2.svg"
              alt="bn45"
            />
          </a>
        </div>
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
          <pre className="prettyprint">{`<div><a href="/" tabindex="0"><img className="bn45" src="https://cdn.worldvectorlogo.com/logos/google-2.svg"alt="bn45"/></a></div>`}</pre>
        </div>
        <div>
          <pre className="prettyprint">{`.bn45 {
  width: 160px;
  height: 60px;
}`}</pre>
          <pre className="prettyprint">
            {"https://cdn.worldvectorlogo.com/logos/google-2.svg"}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
