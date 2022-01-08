/* eslint-disable @next/next/no-img-element */
function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#44</h2>
          <div className="py-5">
            <a href="/buttons/44">
              <img
                className="bn44"
                src="https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png"
                alt="Badge"
              />
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://github.com/r1"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/r1
            </a>
          </h2>
          <div>
            <pre className="code">{`<a href='/'><img class="bn44" src='https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png' alt='Badge'/></a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn44 {
  width: 160px;
  height: 60px;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
