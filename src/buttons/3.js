import React from 'react';
import './style.css';

function App() {
    return (
        <div id="viewer">
            <div className="f416">
            <h1 className="buttonh1">Button#3</h1>
            <a href="/buttons/3" className="bn3">Button</a>
            <h2 className="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
            <h2 className="h2source">Source: <a href="https://github.com/r1" className="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a> </h2>
            <div>
                <pre className="prettyprint">{`<a href="/" className="bn3">Button</a>`}</pre>
            </div>
            <div>
            <pre className="prettyprint">{`.bn3 {
  display: inline-block;
  padding: 0.5em 1.7em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgb(255, 255, 255);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(255, 255, 255, 0.253);
  text-align: center;
  transition: all 0.2s;
}

.bn3:hover {
  color: black;
  background-color: rgb(255, 255, 255);
}`}</pre>
</div>
</div>
        </div>
    );
}

export default App;