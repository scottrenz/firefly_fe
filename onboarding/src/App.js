import React from "react";
import NavBar from "./auth0/NavBar.jsx";
import { useAuth0 } from "./auth0/react-auth0-spa"

// New - import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import SignUp_In from './components/SignUp_In'
import PrivateRoute from "./components/PrivateRoute";


import Onboarding from './components/onboarding/Onboboarding'

import './styles/scss/index.scss';

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={SignUp_In} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
      {/**Added Onboarding for testing */}
      <Onboarding />
    </div>
  );
}

export default App;
