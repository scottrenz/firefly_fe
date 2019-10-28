import React from 'react'
import '../../src/styles/scss/NotFound.scss'

export default function NotFound() {
	return (
		<div class='error'>
			<h1>404</h1>
			<p>It's not you; it's us...</p>
			<p class='smaller'>
				The page you have requested was not found. We have dispatched a team of
				highly trained monkeys to solve it.
			</p>
			<div>
				<button class='cta-button' />
				Home
			</div>
		</div>
	)
}
