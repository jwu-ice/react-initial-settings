import * as React from "react";

import * as ReactDOM from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
