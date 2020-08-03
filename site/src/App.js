import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";
import Context from "./context/context"
import LoginPage from './components/home/LoginPage.jsx' 
import SignUpPage from './components/home/SignUpPage.jsx' 
import HomePage from './components/home/HomePage.jsx' 
import MainPage from './components/main/MainPage.jsx'

function App() {
  const server = process.env.REACT_APP_SERVER_PATH
  const [toggleNav, setToggleNav] = useState(false)
  const [toggleProfilNav, setToggleProfilNav] = useState(false)

  const token= localStorage.getItem('token') || sessionStorage.getItem('token')
  console.log(token);

  const context ={
    toggleProfilNav,
    toggleNav,
    server,
    setToggleNav,
    setToggleProfilNav
  }

  return (
    <Context.Provider value={context}>
    <Router>
      <Route path="/">
        {token? <Redirect to={{pathname: '/main'}}/>: <Redirect to={{pathname: '/home'}}/> }
      </Route>
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
        <Route path="/main">
          <MainPage/>
        </Route>
      </Switch>
    </Router>
    </Context.Provider>
  );
}

export default App;
