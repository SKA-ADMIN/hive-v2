import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard.jsx";
import Analytics from "./components/analytics.jsx";
import Customers from "./components/customers.jsx";
import CRM from "./components/crm.jsx";
import Sidebar from "./components/sidebar.jsx";

function PageRoutes() {
  return (
    <>
      <>
        <Sidebar />

          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/analytics" component={Analytics}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/CRM" component={CRM}></Route>

      </>
    </>
  );
}

export default PageRoutes;
