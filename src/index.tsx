import { StrictMode } from "react";
import ReactDOM from "react-dom";

import * as serviceWorkerRegistration from "serviceWorkerRegistration";
import reportWebVitals from "reportWebVitals";

import App from "components/App/App";
import GlobalStyles from "theme/globalStyles";

ReactDOM.render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals(console.info);
