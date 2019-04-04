/**
 * House all reusable hooks
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
import { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'

function useFetchData({loading, error, markets}, query) {
	const[state, setState] = useState({loading, error, markets})

	useEffect(() => {
		setState({
			...state,
			loading: true,
		})

		const fetchData = async () => {
			try {
				const res = await API.graphql(graphqlOperation(query))
				const markets = res.data.listMarkets.items
				setState({
					...state,
					loading: false,
					markets,
				})

			} catch(error) {
				setState({
					...state,
					loading: false,
					error,
				})
			}

		}

		fetchData();
	}, [])


	return [state]
}

export {
	useFetchData,
}