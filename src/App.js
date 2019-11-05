import React from 'react';
import { BrowserRouter as HashRouter, Route } from "react-router-dom";
import Main from './layouts/main';
import Home from "./pages/home/home";
import { ROUTES } from "./constants";

import './App.css';

function App(props) {
  return (
    <HashRouter basename="/">
      <Main className="app">
        <Route exact path={ROUTES.HOME} component={Home}/>
      </Main>
    </HashRouter>
  );
}

export default App;
