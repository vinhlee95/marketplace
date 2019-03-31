import React from "react"
import { Link } from 'react-router-dom'
import { Auth, Hub } from 'aws-amplify'
import { AppBar, Button } from '@material-ui/core';
import '../styles/Navbar.css'

const Navbar = () => {

	const handleLogout = () => Auth.signOut()

	return(
		<div className='navbar'>
			<AppBar className='appbar'>
					<Link to='/'>Market place 🏘</Link>
					<Button variant='contained' color='secondary' onClick={handleLogout}>Logout</Button>
			</AppBar>
		</div>
	)
}

export default Navbar
