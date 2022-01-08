function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#35</h2>
          <div className="py-5">
            <a href="/buttons/35">
              <h4 className="bn35">Button</h4>
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
            <pre className="code">{`<a href="/"><h4 class="bn35">Button</h4></a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn35 {
  text-decoration: underline;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
