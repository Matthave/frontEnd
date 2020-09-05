import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Contact from "../pages/Contact";
import HomePage from "../pages/HomePage";
import AboutM from "../pages/AboutM";
import Portfolio from "../pages/Portfolio";

import { Route, Switch, HashRouter } from "react-router-dom";
import "../css/style.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/aboutYourArtist" component={AboutM}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
