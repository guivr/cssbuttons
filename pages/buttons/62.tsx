function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#62</h2>
          <div className="py-5">
            <a href="/buttons/62" className="bn62">
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
            <pre className="code">{`<a href="/buttons/62" class="bn62">
  Button
</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn62 {
  color: #1cc49d;
  background-color: #1b2f31;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  width: 8em;
  font-size: large;
  font-weight: 600;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
