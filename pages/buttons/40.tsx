function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #40</h2>
          <div className="py-5">
            <div className="bn40div">
              <a className="bn40" href="/buttons/40">
                Button
              </a>
            </div>
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
            <pre className="code">{`<div className="bn40div">
    <a class="bn40" href="/">Button</a>
</div>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn40 {
  border-radius: 4px;
  font-weight: 600;
  font-size: large;
  padding: 4px 6px;
  color: #fff !important;
}

.bn40::after {
  max-width: 100%;
  height: 2px;
  display: block;
  content: "";
  background: linear-gradient(-90deg, #ff9100 0%, #f10366 50%, #6173ff 100%);
  opacity: 1;
  margin-bottom: -6px;
  margin-top: 1px;
}

.bn40div {
  display: flex;
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
