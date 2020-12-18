import React from 'react';
import './style.css';

function App() {
    return (
        <div id="viewer">
            <div className="f416">
            <h1 className="buttonh1">Button#2</h1>
            <a href="/buttons/2" className="bn2">Button</a>
            <h2 className="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
            <h2 className="h2source">Source: <a href="https://github.com/r1" className="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a> </h2>
            <div>
                <pre className="prettyprint">{`<a href="/buttons/2" className="bn2">Button</a>`}</pre>
            </div>
            <div>
            <pre className="prettyprint">{`.bn2 {
  background-color: #ffffff;
  border: none;
  color: rgb(0, 0, 0);
  padding: 0.3em 1.2em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}`}</pre>
</div>
</div>
        </div>
    );
}

export default App;