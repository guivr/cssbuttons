import React from "react";
import "./style.css";

function App() {
  return (
    <div id="viewer">
      <div className="f416">
        <h1 className="buttonh1">Button#37</h1>
        <a href="/buttons/37" className="bn3637 bn37">
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
          </a>
        </h2>
        <div>
          <pre className="prettyprint">{`@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");`}</pre>
        </div>
        <div>
          <pre className="prettyprint">{`<a href="/" className="bn3637 bn37">Button</a>`}</pre>
        </div>
        <div>
          <pre className="prettyprint">{`.bn3637 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  backface-visibility: hidden;
  border: 0.3rem solid transparent;
  border-radius: 3rem;
}

.bn37 {
  border-color: transparent;
  background-color: #fff;
  color: #000;
  transition: transform 0.2s cubic-bezier(0.235, 0, 0.05, 0.95);
}
  
.bn37:hover {
  transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
}`}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
