import App from "./App";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";

const routes = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
    ],
    ErrorBoundary: ErrorPage,
  },
];

export default routes;
