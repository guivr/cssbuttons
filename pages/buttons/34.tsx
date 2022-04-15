function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#34</h2>
          <div className="py-5">
            <a href="/">
              <button className="bn34">Button</button>
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
            <pre className="code">{`<a href="/"><button class="bn34">Button</button></a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn34 {
  background: none;
  cursor: pointer;
  text-decoration: inherit;
  font-size: 1rem;
  color: white;
  padding: 0.7rem 2rem;
  border-image-slice: 1;
  border-image-Creator: linear-gradient(to left, #743ad5, #d53a9d);
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
