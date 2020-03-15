import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Contact from '../pages/Contact';
import HomePage from '../pages/HomePage';
import AboutM from '../pages/AboutM';
import Portfolio from '../pages/Portfolio';
import Technology from '../pages/Technology';

import { Route, Switch, BrowserRouter, } from 'react-router-dom'
import '../css/style.css';

class App extends React.Component {
  state = {
  }
  render() {
    return (
      <BrowserRouter
        basename="/"
        forceRefresh={false}
        getUserConfirmation={(message, callback) => {
          const allowTransition = window.confirm(message);
          callback(allowTransition);
        }}
        keyLength={12}
      >
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/aboutYourArtist' component={AboutM}></Route>
            <Route path='/portfolio' component={Portfolio}></Route>
            <Route path='/technology' component={Technology}></Route>
            <Route path='/contact' component={Contact}></Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
