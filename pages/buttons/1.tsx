function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#1</h2>
          <div className="py-5">
            <a href="/buttons/1" className="bn1">
              Button
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
            <pre className="code">{`<a href="/" class="bn1">Button</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn1 {
  display: inline-block;
  padding: 0.6em 1.7em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
}

.bn1:hover {
  color: #000000;
  background-color: #ffffff;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
