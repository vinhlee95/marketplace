import React from 'react'
import { Button } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add'
import Modal from './UI/Modal'
import MarketForm from './MarketForm'

class CreateMarket extends React.Component {
	state = {
		showNewMarketModal: false,
	};

	handleOpenModal = () => this.setState({ showNewMarketModal: true })

	handleCloseModal = () => this.setState({ showNewMarketModal: false })

	render() {
		return(
			<div>
				<Button variant="outlined" color="primary" onClick={this.handleOpenModal}>
					<AddIcon />
					Create a new market
				</Button>
				<Modal
					open={this.state.showNewMarketModal}
					handleClose={this.handleCloseModal}
				>
					<MarketForm handleClose={this.handleCloseModal} />
				</Modal>
			</div>
		)
	}
}

export default CreateMarket