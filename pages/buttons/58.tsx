function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #58</h2>
          <div className="py-5">
            <a
              className="inline-flex items-center px-4 py-2 mt-2 font-semibold text-lg tracking-tighter bg-blue-600 text-white"
              href="/buttons/58"
            >
              Button
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              tailwindcss.com
            </a>
          </h2>
          <div>
            <pre className="code">{`This is a button built with TailwindCSS - https://tailwindcss.com/docs/installation`}</pre>
          </div>
          <div>
            <pre className="code">{`<a
  class="inline-flex items-center px-4 py-2 mt-2 font-semibold text-lg tracking-tighter bg-blue-600 text-white"
  href="/">
Button
</a>`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
