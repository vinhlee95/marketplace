import React from "react"
import { withAuthenticator, Authenticator } from 'aws-amplify-react'
import { Auth } from 'aws-amplify'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage"

class App extends React.Component {
	state = { user: null };

	componentDidMount() {
		this.checkAuthStatus()
	}

	componentDidUpdate(prevProps) {
		if(prevProps.user !== this.props.user) {
			this.checkAuthStatus()
		}
	}

	async checkAuthStatus() {
		const user = await Auth.currentAuthenticatedUser()
		if(user) {
			this.setState({ user })
			return;
		}

		this.setState({ user: null })
	}

  render() {
		const { user } = this.state;
		if(!user) {
			return <Authenticator />
		}

    return (
			<div>
				<Router>
					<div>
						<Navbar />
						<Switch>
							<Route path='/' component={HomePage} />
						</Switch>
					</div>
				</Router>
			</div>
		);
  }
}

export default withAuthenticator(App);

