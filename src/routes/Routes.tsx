import { createBrowserRouter } from "react-router-dom";
import { Navigate, RouteObject } from "react-router";

// Layouts
import App from "../layout/App";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import PlaygroundPage from "../pages/PlaygroundPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "not-found", element: <NotFound /> },
      { path: "dating3277-543", element: <PlaygroundPage/>}, // THIS PAGE CANNOT BE RELEASED IN PRODUCTION!
      { path: "*", element: <Navigate replace to={"/not-found"} /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
