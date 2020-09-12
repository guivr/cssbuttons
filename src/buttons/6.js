import React from 'react';
import './style.css';

function App() {
    return (
        <div id="viewer">
            <div class="f416">
            <h1 class="buttonh1">Button#6</h1>
            <a href="/buttons/6" class="bn6">Button</a>
            <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
            <h2 class="h2source">Source: <a href="https://github.com/r1" class="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a> </h2>
            <div>
                <pre className="prettyprint">{`<a href="/"><button class="bn6">Button</button></a>`}</pre>
            </div>
            <div>
            <pre className="prettyprint">{`.bn6 {
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #232423;
  padding: 0.3em 1.2em;
  border-radius: 30px;
  font-size: 1.3rem;
  font-weight: 550;
  color: #ffffff;
  background-size: 100% 100%;
  box-shadow: 0 0 0 4px #232423 inset;
}

.bn6:hover {
  background-image: linear-gradient(
    55deg,
    transparent 10%,
    #161616 10% 20%,
    transparent 20% 30%,
    #161616 30% 40%,
    transparent 40% 50%,
    #161616 50% 60%,
    transparent 60% 70%,
    #161616 70% 80%,
    transparent 80% 90%,
    #161616 90% 100%
  );
  animation: background 3s linear infinite;
}`}</pre>
</div>
</div>
        </div>
    );
}

export default App;