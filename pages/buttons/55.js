import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#55</h1>
          <a
            className="inline-flex items-center px-4 py-2 mt-2 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
            href="/buttons/55"
          >
            <div className="flex text-lg tracking-tighter">
              <span className="justify-center">Buttons</span>
            </div>
          </a>
          <h2 className="h2source">
            Creator:{" "}
            <a
              href="https://github.com/r1"
              className="avis"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/r1
            </a>
          </h2>
          <div>
            <pre className="prettyprint">{`/** This is a button built with Tailwind CSS https://tailwindcss.com/docs/installation **/`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`<a 
className="inline-flex items-center px-4 py-2 mt-2 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline" 
href="/buttons/55"
>
  <div className="flex text-lg tracking-tighter">
    <span className="justify-center">Buttons</span>
  </div>
</a>`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
