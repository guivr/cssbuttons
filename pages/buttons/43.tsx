function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #43</h2>
          <div className="py-5">
            <a href="/buttons/43" className="btn41-43 btn-43">
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
            <pre className="code">{`<a href="/buttons/43" class="btn41-43 btn-43">
  Button
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

.btn-43 {
  border: 2px solid rgb(255, 255, 255);
  z-index: 1;
  color: white;
}

.btn-43:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  background: rgb(255, 255, 255);
  transition: all 0.3s ease;
}

.btn-43:hover {
  color: rgb(0, 0, 0);
}

.btn-43:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
