import React from 'react';
import { Link } from 'react-router-dom';
// import ChillingFlyNoAcc from './chillingFlyNoAcc.json';
import './StartPage.scss';
import WelcomeToFirefly from '../../assets/WelcomeToFireflyWithoutFirefly.svg';
import StaticFirefly from '../../assets/index1.svg';

class LoggedInStartPage extends React.Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='root'>
				<div className='top-bar'>
					<Link to='/signin' className='top-bar-button'>
						<i className='fa fa-home' aria-hidden='true'>
							B
						</i>
					</Link>

					<Link to='/' className='top-bar-button'>
						<i className='fa fa-user-alt' />O
					</Link>
				</div>

				<div className='logo-box'>
					<div className='static-fly'>
						<img src={StaticFirefly} alt='Firefly' className='static-firefly' />
					</div>
					<img
						src={WelcomeToFirefly}
						alt='WelcomeToFirefly'
						className='static-image'
					/>
				</div>
				<div className='button-container'>
					<Link className='start-button'>
						<button className='start-btn'>Start</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default LoggedInStartPage;
