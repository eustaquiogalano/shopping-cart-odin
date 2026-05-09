import App from "./App";
import Cart from "./Pages/Cart/Cart";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Profile from "./Pages/Profile/Profile";
import AuthPage from "./Pages/AuthPage/AuthPage";
import LoginCard from "./components/LoginCard/LoginCard";
import SignupCard from "./components/SignupCard/SignupCard";

const routes = [
  {
    path: "/",
    Component: AuthPage,
    children: [
      { index: true, Component: LoginCard },
      { path: "signup", Component: SignupCard },
    ],
    ErrorBoundary: ErrorPage,
  },
  {
    path: "/home",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "cart", Component: Cart },
      { path: "profile", Component: Profile },
    ],
    ErrorBoundary: ErrorPage,
  },
];

export default routes;
