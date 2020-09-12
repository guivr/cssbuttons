import React from 'react';
import './style.css';


function App() {
    return (
        <div id="viewer">
            <div class="f416">
                <h1 class="buttonh1">Button#31</h1>
                <a class="bn31" href="/buttons/31"><span class="bn31span">Button</span></a>
                <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
                <h2 class="h2source">Source: <a href="https://codepen.io/amberweinberg/pen/dzJERg" class="avis" target="_blank" rel="noopener noreferrer">https://codepen.io/amberweinberg/pen/dzJERg</a></h2>
                <div>
                    <pre className="prettyprint">{`<a class="bn31" href="/"><span class="bn31span">Button</span></a>`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`.bn31 {
  background-image: linear-gradient(to right, #006175 0%, #00a950 100%);
  border-radius: 40px;
  box-sizing: border-box;
  color: #00a84f;
  display: block;
  height: 50px;
  font-size: 1.4em;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 7em;
  z-index: 2;
}

.bn31:hover {
  color: #fff;
}

.bn31 .bn31span {
  align-items: center;
  background: #0e0e10;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;
}

.bn31:hover .bn31span {
  background: transparent;
}`}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;