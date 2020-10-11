import React, { lazy, Suspense } from "react";
import { BrowserRouter as Switch } from "react-router-dom";
import buttons0 from "./buttons/0";
import buttons1 from "./buttons/1";
import buttons2 from "./buttons/2";
import buttons3 from "./buttons/3";
import buttons4 from "./buttons/4";
import buttons5 from "./buttons/5";
import buttons6 from "./buttons/6";
import buttons7 from "./buttons/7";
import buttons8 from "./buttons/8";
import buttons9 from "./buttons/9";
import buttons10 from "./buttons/10";
import buttons11 from "./buttons/11";
import buttons12 from "./buttons/12";
import buttons13 from "./buttons/13";
import buttons14 from "./buttons/14";
import buttons15 from "./buttons/15";
import buttons16 from "./buttons/16";
import buttons17 from "./buttons/17";
import buttons18 from "./buttons/18";
import buttons19 from "./buttons/19";
import buttons20 from "./buttons/20";
import buttons21 from "./buttons/21";
import buttons22 from "./buttons/22";
import buttons23 from "./buttons/23";
import buttons24 from "./buttons/24";
import buttons25 from "./buttons/25";
import buttons26 from "./buttons/26";
import buttons27 from "./buttons/27";
import buttons28 from "./buttons/28";
import buttons29 from "./buttons/29";
import buttons30 from "./buttons/30";
import buttons31 from "./buttons/31";
import buttons32 from "./buttons/32";
import buttons33 from "./buttons/33";
import buttons34 from "./buttons/34";
import buttons35 from "./buttons/35";
import buttons36 from "./buttons/36";
import buttons37 from "./buttons/37";
import buttons38 from "./buttons/38";
import buttons39 from "./buttons/39";
import buttons40 from "./buttons/40";
import buttons41 from "./buttons/41";
import buttons42 from "./buttons/42";
import buttons43 from "./buttons/43";
import buttons44 from "./buttons/44";
import buttons45 from "./buttons/45";
import buttons46 from "./buttons/46";
import buttons47 from "./buttons/47";
import buttons48 from "./buttons/48";
import buttons49 from "./buttons/49";
import Loader from "./Loader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Panel from "./Panel";
import Viewer from "./Viewer";

const Viewer1 = lazy(() => import("./Viewer"));

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route path="/" exact component={Viewer1} />
          </Suspense>
          <Route path="/" component={Panel} />
          <Route path="/buttons/0" exact component={buttons0} />
          <Route path="/buttons/1" exact component={buttons1} />
          <Route path="/buttons/2" exact component={buttons2} />
          <Route path="/buttons/3" exact component={buttons3} />
          <Route path="/buttons/4" exact component={buttons4} />
          <Route path="/buttons/5" exact component={buttons5} />
          <Route path="/buttons/6" exact component={buttons6} />
          <Route path="/buttons/7" exact component={buttons7} />
          <Route path="/buttons/8" exact component={buttons8} />
          <Route path="/buttons/9" exact component={buttons9} />
          <Route path="/buttons/10" exact component={buttons10} />
          <Route path="/buttons/11" exact component={buttons11} />
          <Route path="/buttons/12" exact component={buttons12} />
          <Route path="/buttons/13" exact component={buttons13} />
          <Route path="/buttons/14" exact component={buttons14} />
          <Route path="/buttons/15" exact component={buttons15} />
          <Route path="/buttons/16" exact component={buttons16} />
          <Route path="/buttons/17" exact component={buttons17} />
          <Route path="/buttons/18" exact component={buttons18} />
          <Route path="/buttons/19" exact component={buttons19} />
          <Route path="/buttons/20" exact component={buttons20} />
          <Route path="/buttons/21" exact component={buttons21} />
          <Route path="/buttons/22" exact component={buttons22} />
          <Route path="/buttons/23" exact component={buttons23} />
          <Route path="/buttons/24" exact component={buttons24} />
          <Route path="/buttons/25" exact component={buttons25} />
          <Route path="/buttons/26" exact component={buttons26} />
          <Route path="/buttons/27" exact component={buttons27} />
          <Route path="/buttons/28" exact component={buttons28} />
          <Route path="/buttons/29" exact component={buttons29} />
          <Route path="/buttons/30" exact component={buttons30} />
          <Route path="/buttons/31" exact component={buttons31} />
          <Route path="/buttons/32" exact component={buttons32} />
          <Route path="/buttons/33" exact component={buttons33} />
          <Route path="/buttons/34" exact component={buttons34} />
          <Route path="/buttons/35" exact component={buttons35} />
          <Route path="/buttons/36" exact component={buttons36} />
          <Route path="/buttons/37" exact component={buttons37} />
          <Route path="/buttons/38" exact component={buttons38} />
          <Route path="/buttons/39" exact component={buttons39} />
          <Route path="/buttons/40" exact component={buttons40} />
          <Route path="/buttons/41" exact component={buttons41} />
          <Route path="/buttons/42" exact component={buttons42} />
          <Route path="/buttons/43" exact component={buttons43} />
          <Route path="/buttons/44" exact component={buttons44} />
          <Route path="/buttons/45" exact component={buttons45} />
          <Route path="/buttons/46" exact component={buttons46} />
          <Route path="/buttons/47" exact component={buttons47} />
          <Route path="/buttons/48" exact component={buttons48} />
          <Route path="/buttons/49" exact component={buttons49} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
