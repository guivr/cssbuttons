function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#28</h2>
          <div className="py-5">
            <a href="/buttons/28">
              <button className="bn632-hover bn28">Button</button>
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://codepen.io/JavaScriptJunkie/pen/pPRooV"
              target="_blank"
              rel="noopener noreferrer"
            >
              codepen.io/JavaScriptJunkie/pen/pPRooV
            </a>
          </h2>
          <div>
            <pre className="code">{`<a href="/"><button class="bn632-hover bn28">Button</button></a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn632-hover {
  width: 160px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:hover {
  background-position: 100% 0;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:focus {
  outline: none;
}

.bn632-hover.bn28 {
  background-image: linear-gradient(
    to right,
    #eb3941,
    #f15e64,
    #e14e53,
    #e2373f
  );
  box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;