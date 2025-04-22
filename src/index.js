import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import { Error } from "./Error";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
