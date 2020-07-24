import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './components/home/LoginPage.jsx' 
import SignUpPage from './components/home/SignUpPage.jsx' 
import HomePage from './components/home/HomePage.jsx' 

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage/>
        </Route>
        <Route path="/signIn">
          <LoginPage/>
        </Route>
        <Route path="/signUp">
          <SignUpPage/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
