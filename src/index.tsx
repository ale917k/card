import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import * as serviceWorkerRegistration from "serviceWorkerRegistration";
import reportWebVitals from "reportWebVitals";

import App from "components/App";
import { store, persistor } from "redux/store";
import theme, { GlobalStyles } from "theme";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <App />
            <GlobalStyles />
          </ThemeProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals(console.info);
