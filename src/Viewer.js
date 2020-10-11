import React from 'react';
import './Viewer.css';
import './expandButton';
import countapi from 'countapi-js';

countapi.visits().then((result) => {
  console.log(result.value);
});
 
function Viewer() {
  return (
    <div id="viewer">
      <div id="viewerbuttons">
      <div class="btndiv dark">
          <a class="bn49" href="/buttons/49">Button</a>
        </div>
        <div class="btndiv dark">
          <a class="bn48" href="/buttons/48">Button</a>
        </div>
        <div class="btndiv dark">
          <a class="bn47" href="/buttons/47">Button</a>
        </div>
        <div class="btndiv light">
          <div><a href="/buttons/46" tabindex="0"><img class="bn46" src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png" alt="bn45" /></a></div>
        </div>
        <div class="btndiv dark">
          <div><a href="/buttons/45" tabindex="0"><img class="bn45" src="https://cdn.worldvectorlogo.com/logos/google-play-badge.svg" alt="bn45" /></a></div>
        </div>
        <div class="btndiv dark">
          <a href='/buttons/44'><img class="bn44" src='https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png' alt='Badge' /></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/43">
            <button class="btn41-43 btn-43">Button</button>
          </a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/42">
            <button class="btn41-43 btn-42">Button</button>
          </a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/41">
            <button class="btn41-43 btn-41">Button</button>
          </a>
        </div>
        <div class="btndiv dark">
          <a class="bn40" href="/buttons/40">Button</a>
        </div>
        <div class="btndiv dark">
          <a class="bn39" href="/buttons/39"><span class="bn39span">Button</span></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/38" class="bn3637 bn38">Hover</a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/37" class="bn3637 bn37">Button</a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/36" class="bn3637 bn36">Button</a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/35" class="bn35">Button</a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/34">
            <button class="bn34">Button</button>
          </a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/33"><button class="bn33">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/32"><button class="bn-32 bn32">Hover</button></a>
        </div>
        <div class="btndiv dark">
          <a class="bn31" href="/buttons/31"><span class="bn31span">Button</span></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/30"><button class="bn30">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/29"><button class="bn29">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/28"><button class="bn632-hover bn28">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/27"><button class="bn632-hover bn27">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/26"><button class="bn632-hover bn26">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/25"><button class="bn632-hover bn25">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/24"><button class="bn632-hover bn24">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/23"><button class="bn632-hover bn23">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/22"><button class="bn632-hover bn22">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/21"><button class="bn632-hover bn21">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/20"><button class="bn632-hover bn20">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/19"><button class="bn632-hover bn19">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/18"><button class="bn632-hover bn18">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/17" class="bn17">Button</a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/16" class="bn16">Button</a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/15" class="bn15">Button</a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/14" class="bn14">Button</a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/13" class="bn13 bn11bouncy">Button</a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/12"><button class="w3-button w3-blue w3-border w3-border-white w3-round-large">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/11" class="bn11">Button</a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/10"><button class="w3-button w3-black w3-round-small">Button</button></a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/9" class="bnt521">
            <button class="bn9">
              <span>Apple Button</span>
            </button>
          </a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/8">
            <button class="bn8"><i class="fa fa-home"></i> Home</button>
          </a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/7" class="bn7">Button</a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/6">
            <button class="bn6">Button</button>
          </a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/5" class="bn5">
            Hover
        </a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/4" class="bn4">
            Button
        </a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/3" class="bn3">
            Button
        </a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/2" class="bn2">
            Button
        </a>
        </div>
        <div class="btndiv dark">
          <a href="/buttons/1" class="bn1">Button</a>
        </div>
        <div className="btndiv dark">
          <a href="/buttons/0" class="">
            <button>Button</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Viewer;
