import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";

/**
 * Main entry point containing navigation routes.
 */
const App: FC = () => (
  <Routes>
    <Route path="*" element={<Home />} />
  </Routes>
);

export default App;
