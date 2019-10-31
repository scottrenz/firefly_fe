import React from 'react';
import StoreSideBar from './StoreSidebar';
import { HubDiv } from '../../styles/styled-components/styles';
import FireflyExample from '../../assets/fireflyexample.png';
import Firefly from '../../assets/firefly.png';
import Carousel from "../../utilities/Carousel";


const gameLink = 'https...'; // replace this with the deploy link

const cImages = [Firefly, FireflyExample];

const Hub = props => {
	// when we get more than one game, add the logic for switching between game store pages.
	return (
		<HubDiv className='hub-container'>
			<main>
				<article>
					<div className='game-info'>
						<Carousel images={cImages} />
						<button className='play-now'>
							<a href={`${gameLink}`}>Play Firefly</a>
						</button>
					</div>
				</article>
				<StoreSideBar />
			</main>
		</HubDiv>
	)
};

export default Hub;

