import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from "axios"

import Header from "./components/Header"

import Home from "./containers/Home"
import Location from "./containers/Location"

import "./App.css"

const App = () => {
	const [restaurant, setRestaurant] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [input, setInput] = useState("")

	const fetchData = async () => {
		const response = await axios.get(
			"https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
		)

		setRestaurant(response.data)
		setIsLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<Router>
			<>
				<Header />

				<Switch>
					<Route exact path="/">
						<Home
							restaurant={restaurant}
							setRestaurant={setRestaurant}
							isLoading={isLoading}
							input={input}
							setInput={setInput}
						/>
					</Route>

					<Route path="/Location">
						<Location
							restaurant={restaurant}
							setRestaurant={setRestaurant}
							isLoading={isLoading}
							input={input}
						/>
					</Route>
				</Switch>
			</>
		</Router>
	)
}

export default App
