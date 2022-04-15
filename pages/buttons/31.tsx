function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #31</h2>
          <div className="py-5">
            <a className="bn31" href="/buttons/31">
              <span className="bn31span">Button</span>
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://codepen.io/amberweinberg/pen/dzJERg"
              target="_blank"
              rel="noopener noreferrer"
            >
              codepen.io/amberweinberg/pen/dzJERg
            </a>
          </h2>
          <div>
            <pre className="code">{`<a class="bn31" href="/"><span class="bn31span">Button</span></a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn31 {
  background-image: linear-gradient(to right, #006175 0%, #00a950 100%);
  border-radius: 40px;
  box-sizing: border-box;
  color: #00a84f;
  display: block;
  height: 50px;
  font-size: 1.4em;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 7em;
  z-index: 2;
}

.bn31:hover {
  color: #fff;
}

.bn31 .bn31span {
  align-items: center;
  background: #0e0e10;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;
}

.bn31:hover .bn31span {
  background: transparent;
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
