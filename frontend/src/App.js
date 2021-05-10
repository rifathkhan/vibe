import React from "react";
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {  Navbar, Footer } from "./components";
import  Home  from "./pages/HomePage/Home";
import SignInSide from "./pages/Auth/authenticate";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Switch>
        <Route exact path = '/'>
          <Navbar/>
          <Home/>
          <Footer/>
        </Route>
        <Route exact path = '/auth'>
          <SignInSide/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;