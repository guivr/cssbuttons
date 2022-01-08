function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#0</h2>
          <div className="py-5">
            <button>Button</button>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://twitter.com/timberners_lee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tim Berners-Lee
            </a>
          </h2>
          <div>
            <pre className="code">{`<button>Button</button>`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
