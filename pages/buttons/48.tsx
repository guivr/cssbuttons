function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #48</h2>
          <div className="py-5">
            <a className="bn48" href="/buttons/48">
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
            <pre className="code">{`<a class="bn48" href="/">Button</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn48 {
  background: linear-gradient(90deg, #1e39a5, #c50e07);
  background-size: auto;
  background-clip: border-box;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 300% 300%;
  -webkit-text-fill-color: transparent;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
