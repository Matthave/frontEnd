import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Bars from './Bars';
import Gallery from './Gallery';
import Bars2 from './Bars2';
import Footer from './Footer';
import '../css/style.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Bars />
      <Gallery />
      <Bars2 />
      <Footer />
    </div>
  );
}

export default App;
