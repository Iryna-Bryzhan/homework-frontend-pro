import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const App = () => (
  <Router>
    <Header />
    <ErrorBoundary>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ErrorBoundary>
  </Router>
);

export default App;
