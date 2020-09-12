import React from 'react';
import './style.css';

function App() {
    return (
        <div id="viewer">
            <div class="f416">
            <h1 class="buttonh1">Button#8</h1>
            <a href="/buttons/8"><button class="bn8"><i class="fa fa-home"></i> Home</button></a>
            <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
            <h2 class="h2source">Source: <a href="https://github.com/r1" class="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a> </h2>
            <div>
                <pre className="prettyprint">{`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`}</pre>
            </div>
            <div>
                <pre className="prettyprint">{`<a href="/buttons/8"><button class="bn8"><i class="fa fa-home"></i> Home</button></a>`}</pre>
            </div>
            <div>
            <pre className="prettyprint">{`.bn8 {
  background-color: rgb(255, 255, 255);
  border: none;
  color: rgb(0, 0, 0);
  padding: 12px 16px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
}`}</pre>
</div>
</div>
        </div>
    );
}

export default App;