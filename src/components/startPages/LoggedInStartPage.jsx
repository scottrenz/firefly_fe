import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './LoggedOutStartPage.scss';
import WelcomeToFirefly from '../../assets/WelcomeToFireflyWithoutFirefly.svg';
import StaticFirefly from '../../assets/index1.svg';

class LoggedInStartPage extends React.Component {
	render() {
		return (
			<div className='unlogged-container'>
				<div className='logo-box2'>
					<div className='static-fly'>
						<img src={StaticFirefly} alt='Firefly' className='static-firefly' />
					</div>
					<img
						src={WelcomeToFirefly}
						alt='WelcomeToFirefly'
						className='static-image2'
					/>
				</div>
				<div className='button-container2'>
					<button onClick={() => console.log('POP')} className='start-btn'>
						Start
					</button>
				</div>
			</div>
		);
	}
}

export default withRouter(LoggedInStartPage);
