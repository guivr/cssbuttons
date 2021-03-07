import React from "react";
import "./style.css";

function App() {
  return (
    <div id="viewer">
      <div className="f416">
        <h1 className="buttonh1">Button#44</h1>
        <a href="/buttons/44">
          <img
            className="bn44"
            src="https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png"
            alt="Badge"
          />
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
          <pre className="prettyprint">{`<a href='/'><img className="bn44" src='https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png' alt='Badge'/></a>`}</pre>
        </div>
        <div>
          <pre className="prettyprint">{`.bn44 {
  width: 160px;
  height: 60px;
}
`}</pre>
          <pre className="prettyprint">
            {
              "https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png"
            }
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
