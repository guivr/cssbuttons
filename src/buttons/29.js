import React from 'react';
import './style.css';


function App() {
    return (
        <div id="viewer">
            <div class="f416">
                <h1 class="buttonh1">Button#29</h1>
                <a href="/buttons/29"><button class="bn29">Button</button></a>
                <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
                <h2 class="h2source">Source: <a href="https://codepen.io/SebastianOpperman/pen/mgoXQm" class="avis" target="_blank" rel="noopener noreferrer">https://codepen.io/SebastianOpperman/pen/mgoXQm</a></h2>
                <div>
                    <pre className="prettyprint">{`<a href="/"><button class="bn29">Button</button></a>`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`.bn29 {
  border: none;
  padding: 0.8em 2.5em;
  outline: none;
  color: white;
  font-weight: 900;
  font-style: 1.2em;
  position: relative;
  z-index: 1;
  cursor: pointer;
  background: none;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
}

.bn29:before,
.bn29:after {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10em;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 105%;
  height: 105%;
  content: "";
  z-index: -2;
  background-size: 400% 400%;
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
}

.bn29:before {
  -webkit-filter: blur(7px);
  filter: blur(7px);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-animation: pulse 10s infinite ease;
  animation: pulse 10s infinite ease;
}

.bn29:after {
  -webkit-filter: blur(0.3px);
  filter: blur(0.3px);
}

.bn29:hover:before {
  width: 115%;
  height: 115%;
}`}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;