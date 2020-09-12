import React from 'react';
import './style.css';

function App() {
    return (
        <div id="viewer">
            <div class="f416">
                <h1 class="buttonh1">Button#12</h1>
                <a href="/buttons/12"><button class="w3-button w3-blue w3-border w3-border-white w3-round-large">Button</button></a>
                <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
                <h2 class="h2source">Source: <a href="https://github.com/r1" class="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a> </h2>
                <div>
                    <pre className="prettyprint">{`<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`<a href="/"><button class="w3-button w3-blue w3-border w3-border-white w3-round-large">Button</button></a>`}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;