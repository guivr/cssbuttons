export default function Panel() {
  return (
    <div id="panel">
      <div id="header">
        <a href="/" className="text-lg">
          cssbuttons.app
        </a>
        <div id="expandButton"></div>
      </div>
      <div id="panelScrim">
        <div id="contentWrapper">
          <div id="content">
            <h2 className="h2bg">Community</h2>
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
            </ul>
            <h2 className="h2bg">Code</h2>
            <ul>
              <li>
                <a
                  className="bglink"
                  href="https://github.com/r1/cssbuttons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub (🌟 Give it a star!)
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
            <h2 className="h2bg">Contribute</h2>
            <ul>
              <li>
                <a
                  className="bglink"
                  href="https://github.com/r1/cssbuttons/blob/master/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contribute On GitHub
                </a>
              </li>
              <li>
                <a
                  className="bglink"
                  href="https://github.com/r1/cssbuttons/blob/master/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add A Button
                </a>
              </li>
            </ul>
            <h2 className="h2bg">New?</h2>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}