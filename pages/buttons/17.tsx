function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#17</h2>
          <div className="py-5">
            <a href="/buttons/17" className="bn17">
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
            <pre className="code">{`<a href="/" class="bn17">Button</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn17 {
  font-family: lato,sans-serif;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 10px 40px 10px 40px;
  position: relative;
  border: 3px solid #ffffff;
  border-radius: 20px;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
