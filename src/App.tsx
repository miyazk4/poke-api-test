import React from "react";
import Header from "./components/header";
import "./reset.scss";
import { Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Pokemon from "./pages/pokemon";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
