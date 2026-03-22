import App from "./App";
import Cart from "./Pages/Cart/Cart";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";

const routes = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "cart", Component: Cart },
    ],
    ErrorBoundary: ErrorPage,
  },
];

export default routes;
