function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #47</h2>
          <div className="py-5">
            <a className="bn47" href="/buttons/47">
              Button
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://codepen.io/thomasvaeth/pen/QpBdNo"
              target="_blank"
              rel="noopener noreferrer"
            >
              codepen.io/thomasvaeth/pen/QpBdNo
            </a>
          </h2>
          <div>
            <pre className="code">{`<a class="bn47" href="/">Button</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn47 {
  position: relative;
  padding: 1rem 2rem 0.5rem 2.5rem;
  color: #000000;
  border: 3px solid #776e62;
  -webkit-transition: padding 0.3s ease-in-out;
  transition: padding 0.3s ease-in-out;
}

.bn47:before {
  content: "";
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: -1;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  border-right: 3px solid #ffffff;
  border-bottom: 3px solid #ffffff;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.bn47:hover {
  padding: 0.75rem 2.25rem;
}

.bn47:hover:before {
  top: 0;
  left: 0;
}`}</pre>
          </div>
          <div className="py-5">
            <a
              href="https://cssbuttons.app"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              ← See more buttons
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
