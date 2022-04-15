import Link from "next/link";

export default function Sidebar() {
  return (
    <div id="panel">
      <div id="header">
        <Link href="/">cssbuttons.app</Link>
      </div>
      <div id="panelScrim">
        <div id="contentWrapper">
          <div id="content">
            <h3 className="h3bg font-semibold">How to use</h3>
            <h4 className="h4bg">
              Click on your desired button and copy the HTML & CSS.
            </h4>
            <h2 className="h2bg font-semibold">Code</h2>
            <ul>
              <li>
                <a
                  className="bglink"
                  href="https://github.com/r1/cssbuttons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="bglink"
                  href="https://github.com/r1/cssbuttons/releases/tag/v2.0.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </li>
            </ul>
            <h2 className="h2bg font-semibold">New?</h2>
            <ul>
              <li>
                <a
                  className="bglink"
                  href="https://www.youtube.com/watch?v=mU6anWqZJcc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn HTML & CSS
                </a>
              </li>
              <li>
                <a
                  className="bglink"
                  href="https://htmlcheatsheet.com/css/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Cheatsheet
                </a>
              </li>
              <li>
                <a
                  className="bglink"
                  href="https://getcssscan.com/?ref=cssbuttonsapp"
                >
                  CSS Scan extension
                </a>
              </li>
            </ul>
            <a href="https://getcssscan.com/?ref=cssbuttonsapp">
              <div className="cssscan">
                <img src="https://toastlog.com/img/logos/cssscan.svg" alt="CSS Scan logo" />
                CSS Scan - Easily inspect or copy any website&apos;s CSS
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
