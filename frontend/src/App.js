import React from "react";
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home  from "./pages/HomePage/Home";
import Home2 from "./pages/HomePage/Home2"
import LogIn from "./pages/Auth/signin";
import SignUp from "./pages/Auth/signup";
import { AuthProvider } from "./auth";
import Private from "./private"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <GlobalStyle/>
            <Route exact path = '/' component ={Home} />
            <Route exact path = '/login' component ={LogIn} />
            <Route exact path = '/signup' component ={SignUp} />
            <Private exact path = '/app' component ={Home2} />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App;