function Button() {
    return (
      <>
        <div id="viewer">
          <div className="px-4 py-8">
            <h2 className="text-5xl font-bold">Button #2</h2>
            <div className="py-5">
              <a href="/buttons/63" className="neon-light">
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
              <pre className="code">{`<a href="/buttons/63" className="neon-light">Button</a>`}</pre>
            </div>
            <div>
              <pre className="code">{`.neon-light{
  background: linear-gradient(to right, #33ccff 40%, #99ffff 100%);
  border-radius: 5px;
  color:black;
  font-weight: 600;
  transition: all 400ms;
  padding:10px 25px
}
.neon-light:hover{
  box-shadow: 0px 5px 30px #3ccbfa48;
  margin-bottom: 5px;
}`}</pre>
            </div>
            <div className="py-5 mb-20">
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