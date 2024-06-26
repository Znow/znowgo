import React, {FormEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";


function App() {
  const client = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
  });
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    errors: {},
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  function handleOnSubmit(event: any) {

    event.preventDefault();

    client.post(
      `${process.env.REACT_APP_API_BASE_URL}/auth/register`, 
      JSON.stringify(formData), 
      { headers: { "Content-Type": "application/json" } }
    )
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
  }

  function handleOnLoginSubmit(event: any) {

    event.preventDefault();

    client.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
        JSON.stringify(formData),
        { headers: { "Content-Type": "application/json" } }
    )
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
  }


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
                  <form onSubmit={handleOnLoginSubmit} method='POST'>
                    <label>
                      Username:
                      <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                      />
                    </label>
                    <label>
                      Password:
                      <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                      />
                    </label>
                    <button type="submit">Create</button>
                  </form>
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
            {/*<form onSubmit={handleOnSubmit} method='POST'>
              <label>
                Username:
                      <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                      />
                    </label>
                    <label>
                      Password:
                      <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                      />
                    </label>
                    <button type="submit">Create</button>
                  </form>*/}
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
