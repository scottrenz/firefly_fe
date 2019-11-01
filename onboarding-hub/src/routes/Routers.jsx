import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Layout from './Layout'
import Signin from '../components/onboarding/Signin'
import Slogin from '../components/onboarding/Slogin'
import Profile from '../components/profile/Profile'
import Hub from '../components/hub/Hub'
import PricingPlan from '../components/pricing/PricingPlan'
import NotFound from '../notfound404/NotFound.jsx'
import '../App.css'
import '../styles/scss/index.scss'

const Routers = ({ location }) => {
	const currentKey = location.pathname.split('/')[1] || '/'
	const timeout = { enter: 1300, exit: 200 }

	return (
		<Layout>
			<TransitionGroup component='main' className='page-main'>
				<CSSTransition
					key={currentKey}
					timeout={timeout}
					classNames='fade'
					appear
				>
					<section className='page-main-inner'>
						<Switch location={location}>
							<Route path='/' exact component={Slogin} />
							<Route path='/signin' exact component={Signin} />
							<Route path='/pricingplan' component={PricingPlan} />
							<Route path='/hub' component={Hub} />
							<Route path='/profile' component={Profile} />
							<Route path='*' component={NotFound} />
						</Switch>
					</section>
				</CSSTransition>
			</TransitionGroup>
		</Layout>
	)
}

export default withRouter(Routers)
