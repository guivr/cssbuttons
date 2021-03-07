import React from "react";
import "./style.css";

function App() {
  return (
    <div id="viewer">
      <div className="f416">
        <h1 className="buttonh1">Button#17</h1>
        <a href="/buttons/17" className="bn17">
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
          </a>{" "}
        </h2>
        <div>
          <pre className="prettyprint">{`<a href="/" className="bn17">Button</a>`}</pre>
        </div>
        <div>
          <pre className="prettyprint">{`.bn17 {
  font-family: lato,sans-serif;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 10px 40px 10px 40px;
  position: relative;
  border: 3px solid #ffffff;
  border-radius: 20px;
}`}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
