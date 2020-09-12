import React from 'react';
import './style.css';

function App() {
    return (
        <div id="viewer">
            <div class="f416">
                <h1 class="buttonh1">Button#13</h1>
                <a href="/buttons/13" class="bn13">Button</a>
                <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
                <h2 class="h2source">Source: <a href="https://github.com/r1" class="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a> </h2>
                <div>
                    <pre className="prettyprint">{`<a href="/" class="bn13">Button</a>`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`.bn13 {
  display: inline-block;
  padding: 0.65em 1.6em;
  border: 3px solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  animation: bn13bouncy 5s infinite linear;
  position: relative;
}

.bn13:hover {
  background-color: white;
  color: #000000;
}

@keyframes bn13bouncy {
  0% {
    top: 0em;
  }
  40% {
    top: 0em;
  }
  43% {
    top: -0.9em;
  }
  46% {
    top: 0em;
  }
  48% {
    top: -0.4em;
  }
  50% {
    top: 0em;
  }
  100% {
    top: 0em;
  }
}`}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;