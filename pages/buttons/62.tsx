function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#62</h2>
          <div className="py-5">
            <a href="/buttons/62">
              <button className="bn62">Button</button>
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
            <pre className="code">{`<a href="/buttons/62">
    <button className="bn62">Button</button>
</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn62 {
  color: #1cc49d;
  background-color: #1b2f31;
  border-radius: 50px;
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
