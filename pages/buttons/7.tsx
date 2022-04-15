function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#7</h2>
          <div className="py-5">
            <a href="/buttons/7" className="bn7">
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
            <pre className="code">{`<a href="/" class="bn7">Hover</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn7 {
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #ffffff;
  padding: 0.3em 1.2em;
  border-radius: 30px;
  font-size: 1.2rem;
  color: #000000;
  background-size: 100% 100%;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
