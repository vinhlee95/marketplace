import React from 'react'
import CreateMarket from '../components/CreateMarket'
import MarketList from '../components/MarketList'


class HomePage extends React.Component {

  render() {
    return (
			<div className='home-container'>
				<CreateMarket />
				<MarketList />
			</div>
		);
  }
}

export default HomePage;
