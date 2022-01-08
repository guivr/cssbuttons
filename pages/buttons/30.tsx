function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#30</h2>
          <div className="py-5">
            <a href="/buttons/30">
              <button className="bn30">Button</button>
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://github.com/r1"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/r1
            </a>
          </h2>
          <div>
            <pre className="code">{`<a href="/"><button class="bn30">Button</button></a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn30 {
  border: 5em;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  -webkit-transform: translate(0);
  transform: translate(0);
  background-image: linear-gradient(45deg, #4568dc, #b06ab3);
  padding: 0.7em 2em;
  border-radius: 65px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
  -webkit-transition: box-shadow 0.25s;
  transition: box-shadow 0.25s;
  color: white;
}

.bn30 .text {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #4568dc, #b06ab3);
}

.bn30:after {
  content: "";
  border-radius: 18px;
  position: absolute;
  margin: 4px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: #0e0e10;
}

.bn30:hover {
  background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
  box-shadow: 0 12px 24px rgba(128, 128, 128, 0.1);
}

.bn30:hover .text {
  background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
