import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from "axios"

import Home from "./containers/Home"
import Location from "./containers/Location"
import Restaurant from "./containers/Restaurant"

import "./App.css"

const App = () => {
	const [restaurant, setRestaurant] = useState([])
	const [filterType, setFilterType] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [input, setInput] = useState("")

	const fetchData = async () => {
		let filterType = []
		const response = await axios.get(
			"https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
		)
		for (let i = 0; i < response.data.length; i++) {
			if (filterType.indexOf(response.data[i].type) === -1) {
				filterType.push(response.data[i].type)
			}
		}
		setRestaurant(response.data)
		setFilterType(filterType)
		setIsLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<Router>
			<>
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
						{!isLoading && (
							<Location
								restaurant={restaurant}
								setRestaurant={setRestaurant}
								isLoading={isLoading}
								input={input}
								setInput={setInput}
								filterType={filterType}
							/>
						)}
					</Route>

					<Route path="/Restaurant/:id">
						<Restaurant />
					</Route>
				</Switch>
			</>
		</Router>
	)
}

export default App
