import React from "react"
import Filter from "./Filter"

const FilterGroup = props => {
	const filterType = []

	for (let i = 0; i < props.restaurant.length; i++) {
		if (filterType.indexOf(props.restaurant[i].type) === -1) {
			filterType.push(props.restaurant[i].type)
		}
	}

	return (
		<div section="filter-container">
			{props.isLoading ? (
				<p>Chargement...</p>
			) : (
				<div className="filter-container">
					<Filter filterType={filterType} />
				</div>
			)}
		</div>
	)
}

export default FilterGroup
