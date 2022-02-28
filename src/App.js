import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

// Import Components
import Home from "./Pages/Home";
import Customers from "./Pages/Customers";
import TemplateDefault from "./Templates/Default";
import TemplatePage from "./Templates/Page";

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers">
            <TemplatePage title="Usuários" Component={Customers} />
          </Route>
          <Route path="/">
            <TemplatePage title="Página Inicial" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
};

export default App;
