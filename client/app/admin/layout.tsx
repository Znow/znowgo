import { Outlet } from "react-router";


export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <head>
        <title>Admin Layout</title>
      </head>
      <body>
        <h1>Admin Layout</h1>
        <main>
          <Outlet />
        </main>
      </body>
    </html>
  );
}