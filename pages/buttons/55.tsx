function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #55</h2>
          <div className="py-5">
          <a
            className="inline-flex items-center px-4 py-2 mt-2 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
            href="/buttons/55"
          >
            <div className="flex text-lg tracking-tighter">
              <span className="justify-center">Button</span>
            </div>
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
class="inline-flex items-center px-4 py-2 mt-2 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline" 
href="/"
>
  <div class="flex text-lg tracking-tighter">
    <span class="justify-center">Button</span>
  </div>
</a>`}</pre>
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
