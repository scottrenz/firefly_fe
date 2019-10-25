import React from 'react'
import { useAuth0 } from '../../auth0/react-auth0-spa'
import { Link } from 'react-router-dom'

const Buttons = () => {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

	return (
		<div>
			{!isAuthenticated && (
				<button onClick={() => loginWithRedirect({})}>Log in</button>
			)}
			{isAuthenticated && <button onClick={() => logout()}>Log out</button>}

			{isAuthenticated && (
				<span>
					<Link to='/'>Home</Link>&nbsp;
				</span>
			)}
		</div>
	)
}

export default Buttons
