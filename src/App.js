
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Nav"
import Footer from "./components/Footer"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
          <NavBar/>
            <Switch>
              <Route exact path={"/ReactPortfolio"}>
                <About/>
              </Route>
              <Route exact path={"/portfolio"}>
              <Portfolio/>          
              </Route>
              <Route exact path={"/contact"}>
              <Contact/>          
              </Route>
            </Switch>
          <Footer/>
      </div>
    </Router>
    );
  };
}

export default App;
