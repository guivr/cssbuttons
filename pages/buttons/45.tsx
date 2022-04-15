/* eslint-disable @next/next/no-img-element */
function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #45 - Google Play Store Button</h2>
          <div className="py-5">
            <a href="/buttons/45">
              <img
                className="bn45"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
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
            <pre className="code">{`<a href="/" tabIndex="0"><img class="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/></a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn45 {
  width: 170px;
  height: 50px;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
