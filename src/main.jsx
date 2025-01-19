import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./components/Routes/Routes.jsx";
import AuthProvider from "../src/components/AuthProvider/AuthProvider.jsx";
import { Analytics } from "@vercel/analytics/react";
createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </React.StrictMode>
    <Analytics />
  </>
);
