import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#40</h1>
          <div className="bn40div">
            <a className="bn40" href="/buttons/40">
              Button
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
            <pre className="prettyprint">{`<div className="bn40div">
    <a className="bn40" href="/">Button</a>
</div>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn40 {
  border-radius: 4px;
  font-weight: 600;
  font-size: large;
  padding: 4px 6px;
  color: #fff !important;
}

.bn40::after {
  max-width: 100%;
  height: 2px;
  display: block;
  content: "";
  background: linear-gradient(-90deg, #ff9100 0%, #f10366 50%, #6173ff 100%);
  opacity: 1;
  margin-bottom: -6px;
  margin-top: 1px;
}

.bn40div {
  display: flex;
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
