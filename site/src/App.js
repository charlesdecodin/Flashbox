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
import AddCategoryPage from './components/manage/AddCategoryPage.jsx'
import AddSquadPage from './components/manage/AddSquadPage.jsx'
import AddCardPage from './components/manage/AddCardPage.jsx'

function App() {
  const server = process.env.REACT_APP_SERVER_PATH
  const [toggleNav, setToggleNav] = useState(false)
  const [toggleProfilNav, setToggleProfilNav] = useState(false)
  const [category, setCategory] = useState({})
  const [squad, setSquad] = useState({})
  const [card, setCard] = useState({})

  const hideNav = () => {
    if(toggleNav){
      setToggleNav(false)
    }
    if(toggleProfilNav){
      setToggleProfilNav(false)
    }
  }



  const token= localStorage.getItem('token') || sessionStorage.getItem('token')

  const context ={
    card,
    squad,
    category,
    toggleProfilNav,
    toggleNav,
    server,
    setToggleNav,
    setToggleProfilNav,
    setCategory,
    setSquad,
    setCard
  }

  return (
    <Context.Provider  value={context}>
    <div onClick={hideNav}>
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
        <Route path="/add">
          <AddCategoryPage/>
        </Route>
        <Route path="/addSquad">
          <AddSquadPage/>
        </Route>
        <Route path="/addCard">
          <AddCardPage/>
        </Route>
      </Switch>
    </Router>
    </div>
   
    </Context.Provider>
  );
}

export default App;
