import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Signin from '../components/signin/Signin'
import Signup from '../components/signup/Signup'
import Profile from '../components/profile/Profile'
import ContactForm from '../components/contact/ContactForm'
import StartPage from '../components/StartPages/StartPage.jsx'
import Hub from '../components/hub/Hub'
import StripeParent from '../components/stripe/StripeParent'
import NotFound from '../components/notfound404/NotFound.jsx'

const Routers = ({ location }) => {
	const currentKey = location.pathname.split('/')[1] || '/'
	const timeout = { enter: 1300, exit: 200 }

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
						<Switch location={location}>
							<Route path='/' exact component={Signup} />
							<Route path='/signin' exact component={Signin} />
							<Route path='/hub' exact component={Hub} />
							<Route path='/contact' component={ContactForm} />
							<Route path='/startpage' component={StartPage} />
							<Route path='/profile' component={Profile} />
							<Route path="/stripe" component={StripeParent} />
							<Route path='*' component={NotFound} />
						</Switch>
					</section>
				</CSSTransition>
			</TransitionGroup>
		</>
	)
}

export default withRouter(Routers)
