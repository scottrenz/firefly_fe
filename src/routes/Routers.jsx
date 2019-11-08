import React, { useState } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Signin from '../components/signin/Signin';
import Signup from '../components/signup/Signup';
import Profile from '../components/profile/Profile';
import AccountInfo from '../components/accountInfo/AccountInfo';
import ContactForm from '../components/contact/ContactForm';
import Hub from '../components/hub/Hub';
import StripeParent from '../components/stripe/StripeParent/StripeParent';
import NotFound from '../components/notfound404/NotFound.jsx';
import Tutorial from '../components/tutorial/Tutorial.jsx';
import StartPage from '../components/startPages/StartPage.jsx';
import LoggedOutStartPage from '../components/startPages/LoggedOutStartPage.jsx';
import { UserContext } from '../contexts/UserContext';

const Routers = ({ location }) => {
	const currentKey = location.pathname.split('/')[1] || '/';
	const timeout = { enter: 1300, exit: 200 };
	const [loggedInUser, setLoggedInUser] = useState({});

	return (
		<>
			<section className='page-main-inner'>
				<UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
					<Switch location={location}>
						<Route path='/' exact component={Signup} />
						<Route path='/signin' exact component={Signin} />
						<Route path='/hub' exact component={Hub} />
						<Route path='/account' exact component={AccountInfo} />
						<Route path='/contact' component={ContactForm} />
						<Route path='/loggedinstartpage' component={StartPage} />
						<Route path='/loggedoutstartpage' component={LoggedOutStartPage} />
						<Route path='/profile' component={Profile} />
						<Route path='/stripe' component={StripeParent} />
						<Route path='/tutorial' component={Tutorial} />
						<Route path='*' component={NotFound} />
					</Switch>
				</UserContext.Provider>
			</section>
		</>
	);
};

export default withRouter(Routers);
