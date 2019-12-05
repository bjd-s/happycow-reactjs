import React from "react"

const Filter = props => {
	return (
		<div className="filter-item">
			<div className="filter-item">
				{props.filterType.map((type, index) => {
					return <h4 key={index}>{type}</h4>
				})}
			</div>
		</div>
	)
}

export default Filter
