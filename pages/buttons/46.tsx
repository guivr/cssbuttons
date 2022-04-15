/* eslint-disable @next/next/no-img-element */
function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #46 - Download on the App Store button</h2>
          <div className="py-5">
            <a href="/buttons/46">
              <img
                className="bn46"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="bn45"
              />
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
            <pre className="code">{`<a href="/" tabIndex="0"><img class="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn46 {
  width: 150px;
  height: 50px;
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
