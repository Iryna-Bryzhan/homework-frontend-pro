import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScreenMain from './components/ScreenMain/ScreenMain';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => (
  <Router>
    <Header />
    <ScreenMain />
    <About />
    <Skills />
    <Portfolio />
    <Footer />
  </Router>
);

export default App;
