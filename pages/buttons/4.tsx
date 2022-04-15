function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #4</h2>
          <div className="py-5">
          <a href="/buttons/4" className="bn4">
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
            <pre className="code">{`<a href="/" class="bn4">Button</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn4 {
  background-color: #ffffff;
  border: none;
  color: rgb(0, 0, 0);
  padding: 0.7em 1.7em;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}

.bn4:hover {
  opacity: 1;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
