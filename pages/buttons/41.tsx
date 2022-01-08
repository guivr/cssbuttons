function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#41</h2>
          <div className="py-5">
            <a href="/buttons/41">
              <button className="btn41-43 btn-41">Button</button>
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
            <pre className="code">{`<a href="/">
    <button class="btn41-43 btn-41">Button</button>
</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.btn41-43 {
  padding: 10px 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.btn-41 {
  border: 2px solid rgb(255, 255, 255);
  z-index: 1;
  color: white;
}

.btn-41:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  direction: rtl;
  z-index: -1;
  background: rgb(255, 255, 255);
  transition: all 0.3s ease;
}

.btn-41:hover {
  color: rgb(0, 0, 0);
}

.btn-41:hover:after {
  left: auto;
  right: 0;
  width: 100%;
}

.btn-41:active {
  top: 2px;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
