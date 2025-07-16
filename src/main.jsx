import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./router/router.jsx";

import { Toaster } from "react-hot-toast";
import FirebaseProvider from "./context/AuthContext/FirebaseProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseProvider>
  </StrictMode>
);
