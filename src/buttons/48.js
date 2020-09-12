import React from 'react';
import './style.css';

function App() {
    return (
        <div id="viewer">
            <div class="f416">
                <h1 class="buttonh1">Button#48</h1>
                <a class="bn48" href="/buttons/48">Button</a>
                <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png" /><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png" /><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png" /><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png" /></h2>
                <h2 class="h2source">Source: <a href="https://github.com/r1" class="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a></h2>
                <div>
                    <pre className="prettyprint">{`<a class="bn48" href="/">Button</a>`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`.bn48 {
  background: linear-gradient(90deg, #1e39a5, #c50e07);
  background-size: auto;
  background-clip: border-box;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 300% 300%;
  -webkit-text-fill-color: transparent;
}`}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;