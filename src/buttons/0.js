import React from "react";
import "./style.css";

function App() {
  return (
    <div id="viewer">
      <div className="f416">
        <h1 className="buttonh1">Button#0</h1>
        <button>Button</button>
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
          <pre className="prettyprint">{`<button>Button</button>`}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
