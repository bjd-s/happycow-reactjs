import React from "react"
import Filter from "./Filter"

const FilterGroup = props => {
	const filterType = []

	for (let i = 0; i < props.restaurant.length; i++) {
		if (filterType.indexOf(props.restaurant[i].type) === -1) {
			filterType.push(props.restaurant[i].type)
		}
	}

	console.log(filterType)

	return (
		<div section="filter-container">
			{props.isLoading ? (
				<p>Chargement...</p>
			) : (
				<div className="filter-container">
					{props.restaurant.slice(0, 29).map((offer, index) => {
						return (
							<Filter
								key={index}
								offer={offer}
								restaurant={props.restaurant}
							/>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default FilterGroup
