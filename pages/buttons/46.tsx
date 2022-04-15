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
              target="_blank"
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
        </div>
      </div>
    </>
  );
}

export default Button;
