import React from 'react';
import './style.css';

function App() {
    return (
        <div id="viewer">
            <div class="f416">
            <h1 class="buttonh1">Button#9</h1>
            <a href="/buttons/9" class="bnt521"><button class="bn9"><span>Apple Button</span></button></a>
            <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
            <h2 class="h2source">Source: <a href="https://www.apple.com/" class="avis" target="_blank" rel="noopener noreferrer">https://www.apple.com/</a> </h2>
            <div>
                <pre className="prettyprint">{`<a href="/buttons/9" class="bnt521"><button class="bn9"><span>Apple Button</span></button></a>`}</pre>
            </div>
            <div>
            <pre className="prettyprint">{`.bn9 {
  padding: 2px;
  outline: 0;
  font-size: 17px;
  color: rgb(255, 255, 255);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#fdde5c),
    color-stop(#f8ab5e),
    color-stop(#f56a62),
    color-stop(#a176c8),
    color-stop(#759beb),
    color-stop(#65beb3),
    to(#70db96)
  );
  background: linear-gradient(
    to right,
    #fdde5c,
    #f8ab5e,
    #f56a62,
    #a176c8,
    #759beb,
    #65beb3,
    #70db96
  );
  border-radius: 30px;
  border: 0;
  box-shadow: none;
  cursor: pointer;
}

.bn9 > span {
  display: block;
  padding: 10px 20px;
  font-size: 17px;
  background: #0e0e10;
  border-radius: 30px;
}`}</pre>
</div>
</div>
        </div>
    );
}

export default App;