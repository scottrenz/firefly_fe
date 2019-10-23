// src/App.js

import React from "react";
import NavBar from "./auth0/NavBar.jsx";


// New - import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";


import Onboarding from './components/onboarding/Onboarding'

import './styles/scss/index.scss';

function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
      {/**Added Onboarding for testing */}
      <Onboarding />
    </div>
  );
}

export default App;
