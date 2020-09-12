import React from 'react';
import './style.css';

function App() {
    return (
        <div id="viewer">
            <div class="f416">
            <h1 class="buttonh1">Button#4</h1>
            <a href="/buttons/4" class="bn4">Button</a>
            <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
            <h2 class="h2source">Source: <a href="https://github.com/r1" class="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a> </h2>
            <div>
                <pre className="prettyprint">{`<a href="/" class="bn4">Button</a>`}</pre>
            </div>
            <div>
            <pre className="prettyprint">{`.bn4 {
  background-color: #ffffff;
  border: none;
  color: rgb(0, 0, 0);
  padding: 0.7em 1.7em;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}

.bn4:hover {
  opacity: 1;
}`}</pre>
</div>
</div>
        </div>
    );
}

export default App;