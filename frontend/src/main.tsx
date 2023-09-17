import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import router from "./configs/routes.tsx";
import mantineProps from "./config/mantineProps"

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS {...mantineProps}>
        {/* <RouterProvider router={router} fallbackElement={<p>Loading...</p>} /> */}
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
