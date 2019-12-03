import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./containers/Home"
import Location from "./containers/Location"

import "./App.css"

const App = () => {
	return (
		<Router>
			<>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/Location">
						<Location />
					</Route>
				</Switch>
			</>
		</Router>
	)
}

export default App
