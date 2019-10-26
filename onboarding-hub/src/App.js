import React from "react";
import NavBar from "./navigation/NavBar";

// New - import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from './components/onboarding/Signin'
import Slogin from './components/onboarding/Slogin'
import Hub from './components/hub/Hub'
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

          <Route path="/" exact component={Slogin} />
          <Route path="/sign-in" exact component={Signin} />
          <Route path='/hub' exact component={Hub} />
          <Route path='/onboarding' exact component={Onboarding} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;