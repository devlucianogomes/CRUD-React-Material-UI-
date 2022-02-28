import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

// Import Components
import Home from "./Pages/Home";
import TemplateDefault from "./Templates/Default";

const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  );
};

export default App;
