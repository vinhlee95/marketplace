import React from "react"
import { Link } from 'react-router-dom'
import { Auth, Hub } from 'aws-amplify'

const Navbar = () => {

	const handleLogout = () => Auth.signOut()

	return(
		<div>
			<Link to='/'>Market place 🏘</Link>
			<a href='/logout' onClick={handleLogout}>Logout</a>
		</div>
	)
}

export default Navbar
