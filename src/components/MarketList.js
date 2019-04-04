import React, { useState, useEffect } from 'react'
import { useFetchData } from '../utils'
import { listMarkets } from '../graphql/queries'
import Spinner from './UI/Spinner'

function MarketList() {
	const [state] = useFetchData({
		loading: false,
		error: null,
		markets: [],
	}, listMarkets)

	const { loading, error, markets } = state;

	if(loading) { return <Spinner /> }

	if(!markets || markets.length === 0 || error) { return null; }

	if(error) { console.log(error) }

	return(
		<>
			<h1>Market</h1>
			{
				markets.map(market => {
					const { name, id } = market

					return(
						<div key={id}>
							<h4>{name}</h4>
						</div>
					)
				})
			}
		</>
	)
}

export default MarketList