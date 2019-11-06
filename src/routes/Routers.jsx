import React, { useState } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Signin from '../components/signin/Signin'
import Signup from '../components/signup/Signup'
import Profile from '../components/profile/Profile'
import ContactForm from '../components/contact/ContactForm'
import Hub from '../components/hub/Hub'
import StripeParent from '../components/stripe/StripeParent'
import NotFound from '../components/notfound404/NotFound.jsx'
import { UserContext } from '../contexts/UserContext'

const Routers = ({ location }) => {
	const currentKey = location.pathname.split('/')[1] || '/'
	const timeout = { enter: 1300, exit: 200 }
	const [loggedInUser, setLoggedInUser] = useState({})

	return (
		<>
			<TransitionGroup component='main' className='page-main'>
				<CSSTransition
					key={currentKey}
					timeout={timeout}
					classNames='fade'
					appear
				>
					<section className='page-main-inner'>
						<UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
							<Switch location={location}>
								<Route path='/' exact component={Signup} />
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
		</>
	)
}

export default withRouter(Routers)
