import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

import App from "./App";
import reducers from "./reducers";

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
    <MsalProvider instance={msalInstance}>
        <App />
    </MsalProvider>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
