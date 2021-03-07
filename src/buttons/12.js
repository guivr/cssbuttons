import React from "react";
import "./style.css";

function App() {
  return (
    <div id="viewer">
      <div className="f416">
        <h1 className="buttonh1">Button#12</h1>
        <a href="/buttons/12">
          <button className="w3-button w3-blue w3-border w3-border-white w3-round-large">
            Button
          </button>
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
          </a>{" "}
        </h2>
        <div>
          <pre className="prettyprint">{`<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`}</pre>
        </div>
        <div>
          <pre className="prettyprint">{`<a href="/"><button className="w3-button w3-blue w3-border w3-border-white w3-round-large">Button</button></a>`}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
