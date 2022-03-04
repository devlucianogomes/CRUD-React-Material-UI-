import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

// Import Components
import Home from "./Pages/Home";
import CustomerList from "./Pages/Customers/List";
import CustomersRegister from "./Pages/Customers/Register";

import TemplateDefault from "./Templates/Default";
import TemplatePage from "./Templates/Page";
import Edit from "./Pages/Customers/Edit";

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers/edit/:id">
            <TemplatePage title="Editar Clientes" Component={Edit} />
          </Route>

          <Route path="/customers/add">
            <TemplatePage
              title="Cadastrar Clientes"
              Component={CustomersRegister}
            />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Clientes" Component={CustomerList} />
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
