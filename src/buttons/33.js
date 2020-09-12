import React from 'react';
import './style.css';


function App() {
    return (
        <div id="viewer">
            <div class="f416">
                <h1 class="buttonh1">Button#33</h1>
                <a href="/buttons/33"><button class="bn33">Button</button></a>
                <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
                <h2 class="h2source">Source: <a href="https://codepen.io/chriscoyier/pen/ZVYXRx" class="avis" target="_blank" rel="noopener noreferrer">https://codepen.io/chriscoyier/pen/ZVYXRx</a></h2>
                <div>
                    <pre className="prettyprint">{`<a href="/"><button class="bn33">Button</button></a>`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`.bn33 {
  border: 5em;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  -webkit-transform: translate(0);
  transform: translate(0);
  background-image: linear-gradient(45deg, #4568dc, #b06ab3);
  padding: 0.7em 2em;
  border-radius: 1px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
  -webkit-transition: box-shadow 0.25s;
  transition: box-shadow 0.25s;
  color: white;
}`}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;