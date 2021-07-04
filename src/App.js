import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/index";
import HomePage from "./pages/home/home"
import Services from "./pages/services/services"
import Company from "./pages/company/company"
import Contact from "./pages/contact/contact"
import Footer from "./components/Footer/FooterComponent"
 

function App() {
  return (
    <div className="App">
        <Navbar />
        <BrowserRouter>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/services' component={Services}/>
              <Route exact path='/company' component={Company} />
              <Route exact path='/contact' component={Contact} />                 
              <Redirect to='/home' />
          </Switch>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;