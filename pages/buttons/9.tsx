function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #9 - Gradient Border</h2>
          <div className="py-5">
            <a href="/buttons/9">
              <button className="bn9">
                <span>Button</span>
              </button>
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple.com
            </a>
          </h2>
          <div>
            <pre className="code">{`<a href="/buttons/9"><button class="bn9"><span>Button</span></button></a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn9 {
  padding: 2px;
  outline: 0;
  font-size: 17px;
  color: rgb(0, 0, 0);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#fdde5c),
    color-stop(#f8ab5e),
    color-stop(#f56a62),
    color-stop(#a176c8),
    color-stop(#759beb),
    color-stop(#65beb3),
    to(#70db96)
  );
  background: linear-gradient(
    to right,
    #fdde5c,
    #f8ab5e,
    #f56a62,
    #a176c8,
    #759beb,
    #65beb3,
    #70db96
  );
  border-radius: 30px;
  border: 0;
  box-shadow: none;
  cursor: pointer;
}

.bn9 > span {
  display: block;
  padding: 10px 40px;
  font-size: 17px;
  font-weight: 500;
  background: #ebebeb;
  border-radius: 30px;
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
