import React from 'react'
import CreateMarket from '../components/CreateMarket'


class HomePage extends React.Component {

  render() {
    return (
			<div className='home-container'>
				<CreateMarket />
			</div>
		);
  }
}

export default HomePage;
