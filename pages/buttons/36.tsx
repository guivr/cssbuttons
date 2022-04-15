function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #36</h2>
          <div className="py-5">
            <a href="/buttons/36" className="bn3637 bn36">
              Button
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
            <pre className="code">{`<a href="/" class="bn3637 bn36">Button</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn3637 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  backface-visibility: hidden;
  border: 0.3rem solid transparent;
  border-radius: 3rem;
}

.bn36 {
  border-color: #fff;
  transition: transform 0.2s cubic-bezier(0.235, 0, 0.05, 0.95);
}

.bn36:hover {
  transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
