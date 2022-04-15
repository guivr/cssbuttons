function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #8</h2>
          <div className="py-5">
            <a href="/buttons/8">
              <button className="bn8">
                <i className="fa fa-home"></i> Home
              </button>
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
            <pre className="code">{`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`}</pre>
          </div>
          <div>
            <pre className="code">{`<a href="/buttons/8"><button class="bn8"><i className="fa fa-home"></i> Home</button></a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn8 {
  background-color: rgb(255, 255, 255);
  border: none;
  color: rgb(0, 0, 0);
  padding: 12px 16px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
