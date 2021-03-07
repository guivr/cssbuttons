import React from "react";
import "./style.css";

function App() {
  return (
    <div id="viewer">
      <div className="f416">
        <h1 className="buttonh1">Button#53</h1>
        <a href="/buttons/53">
          <button class="bn53">Button</button>
        </a>
        <h2 className="h2source">
          Creator:{" "}
          <a
            href="https://github.com/r1"
            className="avis"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/r1
          </a>
        </h2>
        <div>
          <pre className="prettyprint">{`<a href="/buttons/53">
  <button class="bn53">Button</button>
</a>`}</pre>
        </div>
        <div>
          <pre className="prettyprint">{`.bn53 {
  background-color: #36a2eb;
  padding: 7px;
  width: 100px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  animation: bn53bounce 4s infinite;
  cursor: pointer;
}

@keyframes bn53bounce {
  5%,
  50% {
    transform: scale(1);
  }

  10% {
    transform: scale(0.9);
  }

  15% {
    transform: scale(1.15);
  }

  20% {
    transform: scale(1.15) rotate(-5deg);
  }

  25% {
    transform: scale(1.15) rotate(5deg);
  }

  30% {
    transform: scale(1.15) rotate(-3deg);
  }

  35% {
    transform: scale(1.15) rotate(2deg);
  }

  40% {
    transform: scale(1.15) rotate(0);
  }
}`}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
