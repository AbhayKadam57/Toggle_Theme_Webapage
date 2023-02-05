import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PageContextProvider } from "./context/PageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PageContextProvider>
    <App />
  </PageContextProvider>
);
