function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #6 - Animated Stripes</h2>
          <div className="py-5">
            <a href="/buttons/6" className="bn6">
              Button
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
            <pre className="code">{`<a href="/buttons/6" class="bn6">Button</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn6 {
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #232423;
  padding: 0.3em 1.2em;
  border-radius: 30px;
  font-size: 1.3rem;
  font-weight: 550;
  color: #ffffff;
  background-size: 100% 100%;
  box-shadow: 0 0 0 4px #232423 inset;
}

.bn6:hover {
  background-image: linear-gradient(
    55deg,
    transparent 10%,
    #161616 10% 20%,
    transparent 20% 30%,
    #161616 30% 40%,
    transparent 40% 50%,
    #161616 50% 60%,
    transparent 60% 70%,
    #161616 70% 80%,
    transparent 80% 90%,
    #161616 90% 100%
  );
  animation: background 3s linear infinite;
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
