import React from 'react';
import './style.css';

function App() {
    return (
        <div id="viewer">
            <div class="f416">
            <h1 class="buttonh1">Button#7</h1>
            <a href="/buttons/7" class="bn7">Button</a>
            <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
            <h2 class="h2source">Source: <a href="https://github.com/r1" class="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a> </h2>
            <div>
                <pre className="prettyprint">{`<a href="/" class="bn7">Hover</a>`}</pre>
            </div>
            <div>
            <pre className="prettyprint">{`.bn7 {
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #ffffff;
  padding: 0.3em 1.2em;
  border-radius: 30px;
  font-size: 1.2rem;
  color: #000000;
  background-size: 100% 100%;
}`}</pre>
</div>
</div>
        </div>
    );
}

export default App;