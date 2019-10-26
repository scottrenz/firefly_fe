import React from 'react'
// import { Link } from 'react-router'
import StoreSideBar from './StoreSidebar'
import Footer from '../Footer'
import { HubDiv } from '../../styles/styled-components/styles'
import FireflyExample from '../../assets/fireflyexample.png'
import Firefly from '../../assets/firefly.png'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const gameLink = 'https...'

// const CarouselConfig = {
// 	className: 'carousel',
// 	loop: true,
// 	nav: true,
// 	items: 1,
// 	autoWidth: true
// }

const Hub = props => {
	// when we get more than one game, add the logic for switching between game store pages.
	return (
		<HubDiv className='hub-container'>
			<main>
				<StoreSideBar />
				<article>
					<div className='game-info'>
						<h1 className='game-name'>Firefly</h1>
						<OwlCarousel className='owl-theme' loop margin={10} nav>
							<div>
								<img src={FireflyExample} alt='firefly example' />
							</div>
							<div>
								<img src={Firefly} alt='blah' />
							</div>
						</OwlCarousel>
						<button className='play-now'>
							<a href={`${gameLink}`}>Play Firefly</a>
						</button>
					</div>
				</article>
			</main>
			<Footer />
		</HubDiv>
	)
}

export default Hub
