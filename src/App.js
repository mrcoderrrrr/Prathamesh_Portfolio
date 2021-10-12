import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Education">
          <Education />
        </Route>
        <Route path="/Experience">
          <Experience />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
