import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#58</h1>
          <a
            className="inline-flex items-center px-4 py-2 mt-2 font-semibold text-lg tracking-tighter bg-blue-600 text-white"
            href="/buttons/58"
          >
            Button
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
  className="inline-flex items-center px-4 py-2 mt-2 font-semibold text-lg tracking-tighter bg-blue-600 text-white"
  href="/buttons/58">
Button
</a>`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
