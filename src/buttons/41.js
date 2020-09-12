import React from 'react';
import './style.css';


function App() {
    return (
        <div id="viewer">
            <div class="f416">
        <h1 class="buttonh1">Button#41</h1>
        <a href="/buttons/41">
          <button class="btn41-43 btn-41">Button</button>
        </a>
        <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png" /><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png" /><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png" /><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png" /></h2>
        <h2 class="h2source">Source: <a href="https://github.com/r1" class="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a></h2>
        <div>
          <pre className="prettyprint">{`<a href="/">
    <button class="btn41-43 btn-41">Button</button>
</a>`}</pre>
        </div>
        <div>
          <pre className="prettyprint">{`.btn41-43 {
  padding: 10px 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.btn-41 {
  border: 2px solid rgb(255, 255, 255);
  z-index: 1;
  color: white;
}

.btn-41:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  direction: rtl;
  z-index: -1;
  background: rgb(255, 255, 255);
  transition: all 0.3s ease;
}

.btn-41:hover {
  color: rgb(0, 0, 0);
}

.btn-41:hover:after {
  left: auto;
  right: 0;
  width: 100%;
}

.btn-41:active {
  top: 2px;
}`}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;