import React from "react"
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import { AppBar, Button } from '@material-ui/core'

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
