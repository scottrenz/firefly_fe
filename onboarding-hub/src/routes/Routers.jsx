import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition'
import NavBar from '../components/navigation/NavBar'
import Signin from '../components/onboarding/Signin'
import Slogin from '../components/onboarding/Slogin'
import Hub from '../components/hub/Hub'
import Onboarding from '../components/onboarding/Onboarding'
import PricingPlan from '../components/pricing/PricingPlan'
import '../App.css'
import '../styles/scss/index.scss'

const SloginContainer = () => (
	<div className=''>
		<Route exact path='/' component={SloginContainer} />
	</div>
)

function Routers() {
	return (
		<div className='App'>
			<NavBar />

			<main className='main'>
				<Route
					render={({ location, history, match }) => {
						return (
							<RouteTransition
								className='page-wrapper'
								pathname={location.pathname}
								atEnter={{ translateX: 100 }}
								atLeave={{ translateX: -150 }}
								atActive={{ translateX: 0 }}
								runOnMount={false}
								mapStyles={styles => ({
									transform: `translateX(${styles.translateX}%)`
								})}
							>
								<Switch key={location.key} location={location}>
									<Route exact path='/' component={Slogin} />
									<Route exact path='/signin' component={Signin} />
									<Route exact path='/hub' component={Hub} />
									<Route exact path='/onboarding' component={Onboarding} />
									<Route exact path='/pricingplan' component={PricingPlan} />
								</Switch>
							</RouteTransition>
						)
					}}
				/>
			</main>
		</div>
	)
}
export default Routers
