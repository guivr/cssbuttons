function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button#59</h2>
          <div className="py-5">
            <a className="bn59" href="/buttons/59">
              Button
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
            <pre className="code">{`<a class="bn59" href="/">
    Button
</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn59 {
  background-color: #141414;
  border: 1px solid rgba(54, 54, 54, 0.6);
  font-weight: 600;
  position: relative;
  outline: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 45px;
  width: 130px;
  opacity: 1;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
