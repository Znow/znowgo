import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import axios from "axios";
import "./app.css";
import "./index.css";
import { useState } from "react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

  

export function Layout({ children }: { children: React.ReactNode }) {
  const client = axios.create({
    baseURL: 'http://localhost:8080/auth/register',
    // baseURL: `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
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
      // `${process.env.REACT_APP_API_BASE_URL}/auth/register`, 
      'http://localhost:8080/auth/register',
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
        // `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
        'http://localhost:8080/auth/login',
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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="wrap">
          <div id="site-header"></div>
            <div id="body">
                <div id="side-bar">
                    <div className="box" id="navigation">
                        <div className="box-header"></div>
                        <div className="content">
                            {/* <NavMenu /> */}
                            <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">About</a></li>
                              <li><a href="#">Contact</a></li>
                            </ul>
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
                  {children}
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
              <span>Znow.dk</span>
            </div>
          </div>
        
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
