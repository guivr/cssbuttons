import React from 'react';
import './style.css';

function App() {
    return (
        <div id="viewer">
            <div className="f416">
                <h1 className="buttonh1">Button#49</h1>
                <a className="bn49" href="/buttons/48">Button</a>
                <h2 className="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png" /><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png" /><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png" /><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png" /></h2>
                <h2 className="h2source">Source: <a href="https://github.com/r1" className="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a></h2>
                <div>
                    <pre className="prettyprint">{`<a className="bn49" href="/buttons/49">Button</a>`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`.bn49 {
  border: 0;
  text-align: center;
  display: inline-block;
  padding: 14px;
  width: 150px;
  margin: 7px;
  color: #ffffff;
  background-color: #36a2eb;
  border-radius: 8px;
  font-family: "proxima-nova-soft", sans-serif;
  font-weight: 600;
  text-decoration: none;
  transition: box-shadow 200ms ease-out;
}`}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;