import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Subheader from "./components/Subheader"
import CardGroup from "./components/CardGroup"

import "./App.css"

const App = () => {
	return (
		<Router>
			<>
				<Header />

				<Subheader />

				<div className="content">
					<CardGroup />
				</div>

				<Switch>
					<Route exact path="/"></Route>
				</Switch>
			</>
		</Router>
	)
}

export default App
