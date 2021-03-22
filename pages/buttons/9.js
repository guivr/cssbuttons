import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#9</h1>
          <a href="/buttons/9" className="bnt521">
            <button className="bn9">
              <span>Apple Button</span>
            </button>
          </a>
          <h2 className="h2source">
            Creator:{" "}
            <a
              href="https://www.apple.com/"
              className="avis"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple.com
            </a>{" "}
          </h2>
          <div>
            <pre className="prettyprint">{`<a href="/buttons/9" className="bnt521"><button className="bn9"><span>Apple Button</span></button></a>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn9 {
  padding: 2px;
  outline: 0;
  font-size: 17px;
  color: rgb(255, 255, 255);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#fdde5c),
    color-stop(#f8ab5e),
    color-stop(#f56a62),
    color-stop(#a176c8),
    color-stop(#759beb),
    color-stop(#65beb3),
    to(#70db96)
  );
  background: linear-gradient(
    to right,
    #fdde5c,
    #f8ab5e,
    #f56a62,
    #a176c8,
    #759beb,
    #65beb3,
    #70db96
  );
  border-radius: 30px;
  border: 0;
  box-shadow: none;
  cursor: pointer;
}

.bn9 > span {
  display: block;
  padding: 10px 20px;
  font-size: 17px;
  background: #0e0e10;
  border-radius: 30px;
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
