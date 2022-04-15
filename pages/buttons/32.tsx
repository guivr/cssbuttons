function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #32</h2>
          <div className="py-5">
            <a href="/buttons/32">
              <button className="bn-32 bn32">Hover</button>
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://codepen.io/alexboffey/pen/wWXqxO"
              target="_blank"
              rel="noopener noreferrer"
            >
              codepen.io/alexboffey/pen/wWXqxO
            </a>
          </h2>
          <div>
            <pre className="code">{`<a href="/"><button class="bn-32 bn32">Hover</button></a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn32 {
  border-color: #ffffff;
  padding: 0.6em 2.3em;
  cursor: pointer;
  font-size: 1em;
  color: #ffffff;
  background-image: linear-gradient(45deg, transparent 50%, #000000 50%);
  background-position: 25%;
  background-size: 400%;
  -webkit-transition: background 500ms ease-in-out, color 500ms ease-in-out;
  transition: background 500ms ease-in-out, color 500ms ease-in-out;
}

.bn32:hover {
  color: #ffffff;
  background-position: 100%;
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
