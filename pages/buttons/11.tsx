function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #11</h2>
          <div className="py-5">
            <a href="/buttons/11" className="bn11">
              Button
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
            <pre className="code">{`<a href="/" class="bn11">Button</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn11 {
  display: inline-block;
  padding: 0.5em 1.7em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  background-color: rgb(80, 10, 172);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
}

a.bn11:hover {
  border-color: rgb(255, 255, 255);
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
