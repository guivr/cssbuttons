function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #39</h2>
          <div className="py-5">
            <a className="bn39" href="/buttons/39">
              <span className="bn39span">Button</span>
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://getcssscan.com/?ref=cssbuttonsapp"
            >
              CSS Scan
            </a>
          </h2>
          <div>
            <pre className="code">{`<a class="bn39" href="/"><span class="bn39span">Button</span></a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn39 {
  background-image: linear-gradient(135deg, #008aff, #86d472);
  border-radius: 6px;
  box-sizing: border-box;
  color: #ffffff;
  display: block;
  height: 50px;
  font-size: 1.4em;
  font-weight: 600;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 7em;
  z-index: 2;
}

.bn39:hover {
  color: #fff;
}

.bn39 .bn39span {
  align-items: center;
  background: #0e0e10;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;
}

.bn39:hover .bn39span {
  background: transparent;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
