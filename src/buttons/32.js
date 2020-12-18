import React from 'react';
import './style.css';


function App() {
    return (
        <div id="viewer">
            <div className="f416">
                <h1 className="buttonh1">Button#32</h1>
                <a href="/buttons/32"><button className="bn-32 bn32">Hover</button></a>
                <h2 className="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
                <h2 className="h2source">Source: <a href="https://codepen.io/alexboffey/pen/wWXqxO" className="avis" target="_blank" rel="noopener noreferrer">https://codepen.io/alexboffey/pen/wWXqxO</a></h2>
                <div>
                    <pre className="prettyprint">{`<a href="/"><button className="bn-32 bn32">Hover</button></a>`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`.bn32 {
  border-color: #ffffff;
  padding: 0.6em 2.3em;
  cursor: pointer;
  font-size: 1em;
  color: #000000;
  background-image: linear-gradient(45deg, transparent 50%, #000000 50%);
  background-position: 25%;
  background-size: 400%;
  -webkit-transition: background 500ms ease-in-out, color 500ms ease-in-out;
  transition: background 500ms ease-in-out, color 500ms ease-in-out;
}

.bn32:hover {
  color: #ffffff;
  background-position: 100%;
}`}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;