import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Page1 from './components/Page1';
import Test from './components/Test';
import Page2 from './components/Page2';

function App() {
  return (
    <Router>
      <div class="Grid">
        <Header /> 
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/test" component={Test} />
      </div>
    </Router>
  );
}


export default App;
