import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css"; 
import Login from "./components/login.jsx";
import Home from "./components/pages/home.jsx";
import PageRoutes from "./pageRoutes.js";


function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Switch>
            <Route  path="/" exact component={Login}></Route> 
            <PageRoutes />
          </Switch>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
