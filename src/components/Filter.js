import React from "react"

const Filter = props => {
	const filterRestaurant = []
	const filterOther = []

	for (let i = 0; i < props.filterType.length; i++) {
		if (
			props.filterType[i] === "vegan" ||
			props.filterType[i] === "vegetarian" ||
			props.filterType[i] === "veg-options"
		) {
			filterRestaurant.push(props.filterType[i])
		} else {
			filterOther.push(props.filterType[i])
		}
	}

	return (
		<div className="filter-container">
			<h2>Restaurants</h2>
			<div className="filter-item">
				{filterRestaurant.map((type, index) => {
					return <h4 key={index}>{type}</h4>
				})}
			</div>

			<h2>Store & More</h2>
			<div className="filter-item">
				{filterOther.map((type, index) => {
					return <h4 key={index}>{type}</h4>
				})}
			</div>
		</div>
	)
}

export default Filter
