import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Context from "./context/context"
import LoginPage from './components/home/LoginPage.jsx' 
import SignUpPage from './components/home/SignUpPage.jsx' 
import HomePage from './components/home/HomePage.jsx' 

function App() {
  const server = process.env.REACT_APP_SERVER_PATH
  const [token, setToken] = useState('')
  
  const context ={
    token,
    server,
    setToken
  }

  return (
    <Context.Provider value={context}>
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
    </Context.Provider>
  );
}

export default App;
