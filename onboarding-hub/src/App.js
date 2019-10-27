import React, { Component } from 'react'
import NavBar from "./navigation/NavBar";
import { RouteTransition } from 'react-router-transition'
// New - import the React Router components, and the Profile page component
import { Route, Switch } from "react-router-dom";
import Signin from './components/onboarding/Signin'
import Slogin from './components/onboarding/Slogin'
import Hub from './components/hub/Hub'
import Onboarding from './components/onboarding/Onboarding'
import PricingPlan from './components/pricing/PricingPlan'
import './App.css'
import './styles/scss/index.scss'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <main className="main">
          <Route render={({ location, history, match }) => {
            return (
              <RouteTransition
                className="page-wrapper"
                pathname={this.props.location.pathname}
                atEnter={{ translateX: 100 }}
                atLeave={{ translateX: -150 }}
                atActive={{ translateX: 0 }}
                runOnMount={false}
                mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
              >
                <Switch key={location.key} location={location}>
                  <Route exact path="/" component={Slogin} />
                  <Route exact path="/signin" component={Signin} />
                  <Route exact path="/hub" component={Hub} />
                  <Route exact path="/onboarding" component={Onboarding} />
                  <Route exact path="/pricingplan" component={PricingPlan} />
                </Switch>
              </RouteTransition>
            );
          }} />
        </main>
      </div>
    );
  }
}

export default App;