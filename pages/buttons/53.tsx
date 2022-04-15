function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#53</h2>
          <div className="py-5">
            <a href="/buttons/53">
              <button className="bn53">Button</button>
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://getcssscan.com/?ref=cssbuttonsapp"
              target="_blank"
            >
              CSS Scan
            </a>
          </h2>
          <div>
            <pre className="code">{`<a href="/">
  <button class="bn53">Button</button>
</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn53 {
  background-color: #b81515;
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
    transform: scale(1);
  }

  15% {
    transform: scale(1);
  }

  20% {
    transform: scale(1) rotate(-5deg);
  }

  25% {
    transform: scale(1) rotate(5deg);
  }

  30% {
    transform: scale(1) rotate(-3deg);
  }

  35% {
    transform: scale(1) rotate(2deg);
  }

  40% {
    transform: scale(1) rotate(0);
  }
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
