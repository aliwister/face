import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import theme from "./theme";
import { storeConfig, history } from "./state/store";
import { Provider, ReactReduxContext } from "react-redux";
import { LocalizeProvider } from "react-localize-redux";
import { PersistGate } from "redux-persist/integration/react";
import { MuiThemeProvider } from "@material-ui/core/styles/index";
import { ConnectedRouter } from "connected-react-router";

import App from "./App";

//import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={storeConfig.store} context={ReactReduxContext}>
      <LocalizeProvider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <ConnectedRouter history={history} context={ReactReduxContext}>
            <App style={{ height: "100%" }} />
          </ConnectedRouter>
        </PersistGate>
      </LocalizeProvider>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
//serviceWorker.unregister();
