import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./global.css";

import routes from "./routes";
import { SidebarProvider } from "./components/ui/sidebar";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
      <RouterProvider router={router}></RouterProvider>
    </SidebarProvider>
  </StrictMode>,
);
