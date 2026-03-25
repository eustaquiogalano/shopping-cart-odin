import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";

import "./global.css";

import routes from "./routes";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </StrictMode>
);
