import React from "react";
import "./style.css";

function App() {
  return (
    <div id="viewer">
      <div className="f416">
        <h1 className="buttonh1">Button#51</h1>
        <a href="/buttons/51">
          <button className="w3-btn w3-blue">
            <b>Button</b>
          </button>
        </a>
        <h2 className="h2source">
          Creator:{" "}
          <a
            href="https://www.w3schools.com"
            className="avis"
            target="_blank"
            rel="noopener noreferrer"
          >
            w3schools
          </a>
        </h2>
        <div>
          <pre className="prettyprint">{`<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`}</pre>
        </div>
        <div>
          <pre className="prettyprint">{`<a href="/buttons/51">
    <button className="w3-btn w3-blue"><b>Button</b></button>
</a>`}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
