import React, { useState, useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import { API, graphqlOperation } from 'aws-amplify'
import { createMarket } from '../graphql/mutations'

import { UserContext } from '../App'
import Snackbar from '../components/UI/Snackbar'

function MarketForm(props) {
	const [name, setName] = useState('')
	const [alert, setAlert] = useState({
		show: false,
		type: '',
		content: '',
	})

	const user = useContext(UserContext)

	const handleCreateMarket = async () => {
		try {
			const input = {
				name,
				owner: user.username
			}
			const res = await API.graphql(graphqlOperation(createMarket, {input}))

			if(!res.error) {
				setAlert({
					show: true,
					type: 'success',
					content: 'Successfully created new market ✅'
				})
			}

		} catch(error) {
			console.log(error)
			setAlert({
				show: true,
				type: 'error',
				content: 'Whoops! Something went wrong 😔'
			})
		}

		setTimeout(() => {
			setName('')
			props.handleClose()
		}, 1000)
	}

	const handleCloseAlert = () => setAlert({
		...alert,
		show: false,
	})

	return(
		<div className='market-form-container'>
			<h2>Create New Market</h2>
			<TextField
				label='Market name'
				value={name}
				onChange={e => setName(e.target.value)}
				fullWidth
			/>
			<div className='button-container'>
				<Button variant="outlined" color="secondary" onClick={props.handleClose}>
					Cancel
				</Button>
				<Button
					variant="outlined"
					color="primary"
					onClick={handleCreateMarket}
					disabled={name === ''}
				>
					Add
				</Button>
			</div>
			<Snackbar
				open={alert.show}
				handleClose={handleCloseAlert}
				type={alert.type}
				content={alert.content}
			/>
		</div>
	)
}

export default MarketForm