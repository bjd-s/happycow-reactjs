import React from "react"

const Filter = props => {
	return (
		<div className="filter-item">
			<div className="filter-item">
				<h4>{props.offer.type}</h4>
			</div>
		</div>
	)
}

export default Filter
