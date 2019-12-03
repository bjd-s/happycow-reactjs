import React from "react"

import Card from "./Card"

const CardGroup = props => {
	return (
		<div id="home-content-container">
			{props.isLoading ? (
				<p>Chargement...</p>
			) : (
				<div className="card-container">
					{props.restaurant.slice(0, 29).map((offer, index) => {
						return <Card key={index} offer={offer} />
					})}
				</div>
			)}
		</div>
	)
}

export default CardGroup
