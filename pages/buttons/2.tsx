function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #2</h2>
          <div className="py-5">
            <a href="/buttons/2" className="bn2">
              Button
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://getcssscan.com/?ref=cssbuttonsapp"
            >
              CSS Scan
            </a>
          </h2>
          <div>
            <pre className="code">{`<a href="/buttons/2" class="bn2">Button</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn2 {
  background-color: #ffffff;
  border: none;
  color: rgb(0, 0, 0);
  padding: 0.3em 1.2em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
