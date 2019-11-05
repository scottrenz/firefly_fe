import React, { createContext, useState } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Layout from './Layout'
import Signin from '../components/onboarding/Signin'
import Slogin from '../components/onboarding/Slogin'
import Profile from '../components/profile/Profile'
import ContactForm from '../components/contact/ContactForm'
import Hub from '../components/hub/Hub'
import StripeParent from '../components/onboarding/StripeParent'
import NotFound from '../notfound404/NotFound.jsx'
import '../styles/scss/index.scss'

const Routers = ({ location }) => {

	// hooks
	const UserContext = createContext(); 
	const { user, setUser } = useState()

	const currentKey = location.pathname.split('/')[1] || '/'
	const timeout = { enter: 1300, exit: 200 }

	console.log('Check', user); 

	let checking = 'testing provider value'

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
						<UserContext.Provider value={checking}>
							<Switch location={location}>
								<Route path='/' exact component={Slogin} />
								<Route path='/signin' exact component={Signin} />
								<Route path='/hub' exact component={Hub} />
								<Route path='/contact' component={ContactForm} />
								<Route path='/profile' component={Profile} />
								<Route path="/stripe" component={StripeParent} />
								<Route path='*' component={NotFound} />
							</Switch>
						</UserContext.Provider>
					</section>
				</CSSTransition>
			</TransitionGroup>
		</Layout>
	)
}

export default withRouter(Routers)
