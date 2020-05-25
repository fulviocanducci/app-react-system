import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import SystemProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <SystemProvider>
      <App />
    </SystemProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
