import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#50</h1>
          <p>
            <button className="w3-btn w3-deep-purple">Deep Purple</button>
          </p>
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
            <pre className="prettyprint">{`<p><button className="w3-btn w3-deep-purple">Deep Purple</button></p>`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
