import React from 'react';
import './style.css';


function App() {
    return (
        <div id="viewer">
            <div class="f416">
                <h1 class="buttonh1">Button#36</h1>
                <a href="/buttons/36" class="bn3637 bn36">Button</a>
                <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
                <h2 class="h2source">Source: <a href="https://github.com/r1" class="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a></h2>
                <div>
                    <pre className="prettyprint">{`@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`<a href="/" class="bn3637 bn36">Button</a>`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`.bn3637 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  backface-visibility: hidden;
  border: 0.3rem solid transparent;
  border-radius: 3rem;
}

.bn36 {
  border-color: #fff;
  transition: transform 0.2s cubic-bezier(0.235, 0, 0.05, 0.95);
}

.bn36:hover {
  transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
}`}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;