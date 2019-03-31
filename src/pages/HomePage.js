import React from "react"
import { Button } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add'

class HomePage extends React.Component {
  state = {};

  render() {
    return (
			<div className='home-container'>
				<Button variant="outlined" color="primary">
					<AddIcon />
					Create a new market
				</Button>
			</div>
		);
  }
}

export default HomePage;
