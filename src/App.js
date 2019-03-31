import React from "react"
import { withAuthenticator } from 'aws-amplify-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage"

import './styles/App.css'

class App extends React.Component {
  state = {};

  render() {
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

