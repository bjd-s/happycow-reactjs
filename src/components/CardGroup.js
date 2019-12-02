import React, { useState, useEffect } from "react"
import axios from "axios"

import Card from "./Card"

const CardGroup = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [restaurant, setRestaurant] = useState([])

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
		<div id="home-content-container">
			{isLoading ? (
				<p>Chargement...</p>
			) : (
				<div id="card-container">
					{restaurant.slice(0, 49).map((offer, index) => {
						return <Card key={index} offer={offer} />
					})}
				</div>
			)}
		</div>
	)
}

export default CardGroup
