import React from "react";
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home  from "./pages/HomePage/Home";
import Home2 from "./pages/HomePage/Home2"
import LogIn from "./pages/Auth/signin";
import Signup from "./pages/Auth/signup";

function App() {
  return (
    <Router>
      <GlobalStyle/>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route exact path = '/login'>
          <LogIn/>
        </Route>
        <Route exact path = '/signup'>
          <Signup/>
        </Route>
        <Route exact path = '/app'>
          <Home2/>
        </Route>
    </Router>
  )
}

export default App;