import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="wrap">
    <div id="site-header"></div>
      <div id="body">
          <div id="side-bar">
              <div className="box" id="navigation">
                  <div className="box-header"></div>
                  <div className="content">
                      {/* <NavMenu /> */}
                  </div>
              </div>
              <div className="box" id="profile">
                  <div className="box-header"></div>
                  <div className="content">
                  </div>
              </div>
              <div className="box" id="something">
                  <div className="box-header"></div>
                  <div className="content">
                      <span>More content will come...</span>
                  </div>
              </div>
              <div className="box" id="shoutbox">
                  <div className="box-header"></div>
                  <div className="content">
                      {/* <Shoutbox /> */}
                  </div>
              </div>
          </div>

            <div className="box" id="content">
              <div className="box-header"></div>
              <div className="content">
                @Body
                @*&nbsp;<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>*@
              </div>
            </div>
      </div>
      <div id="iesucks"></div>
      <div id="footer">
          <p>Znow</p>
      </div>
  </div>
  );
}

export default App;
