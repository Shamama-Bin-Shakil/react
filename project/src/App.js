import React from "react";
import Home from "./MyComponents/Home";
import Skills from "./MyComponents/Skills";
import Contact from "./MyComponents/Contact";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Home />}></Route>
        <Route exact path="/skill" component={() => <Skills />}></Route>
        <Route exact path="/contact" component={() => <Contact />}></Route>
      </Switch>
    </>
  );
}

export default App;
