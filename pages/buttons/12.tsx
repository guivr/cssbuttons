function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#12</h2>
          <div className="py-5">
            <a href="/buttons/12">
              <button className="w3-button w3-blue w3-border w3-border-white w3-round-large">
                Button
              </button>
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://www.w3schools.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              w3schools.com
            </a>
          </h2>
          <div>
            <pre className="code">{`<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`}</pre>
          </div>
          <div>
            <pre className="code">{`<a href="/"><button class="w3-button w3-blue w3-border w3-border-white w3-round-large">Button</button></a>`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
