function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #60</h2>
          <div className="py-5">
            <a className="bn60" href="/buttons/60">
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
            <pre className="code">{`<a class="bn60" href="/">
    Button
</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn60 {
  background-color: #190c8d;
  color: #ffffff;
  font-size: 1.3em;
  font-weight: 600;
  position: relative;
  outline: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 55px;
  width: 160px;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
