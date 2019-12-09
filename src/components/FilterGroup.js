import React from "react"
import Filter from "./Filter"

const FilterGroup = props => {
	return (
		<div section="filter-container">
			{props.isLoading ? (
				<p>Chargement...</p>
			) : (
				<Filter filterType={props.filterType} />
			)}
		</div>
	)
}

export default FilterGroup
