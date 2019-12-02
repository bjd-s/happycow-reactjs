import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Header from "./components/Header"
import Subheader from "./components/Subheader"

import "./App.css"

const App = () => {
	return (
		<Router>
			<>
				<Header />
				<Subheader />

				<Switch>
					<Route exact path="/"></Route>
				</Switch>
			</>
		</Router>
	)
}

export default App
