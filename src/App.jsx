import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES_APP } from "./config/routes";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        {ROUTES_APP.map((component) => (
          <Route
            key={component.path}
            path={component.path}
            element={component.element}
          />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default App;
