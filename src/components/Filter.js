import React, { useState, useEffect } from "react"

const Filter = props => {
	const [isLoading, setIsLoading] = useState(true)
	const [filterRestaurant, setFilterRestaurant] = useState([])
	const [filterOther, setFilterOther] = useState([])

	useEffect(() => {
		let filterRestaurantCopy = [...filterRestaurant]
		let filterOtherCopy = [...filterOther]

		for (let i = 0; i < props.filterType.length; i++) {
			if (
				props.filterType[i] === "vegan" ||
				props.filterType[i] === "vegetarian" ||
				props.filterType[i] === "veg-options"
			) {
				filterRestaurantCopy.push({
					name: props.filterType[i],
					isActive: false
				})
			} else {
				filterOtherCopy.push({
					name: props.filterType[i],
					isActive: false
				})
			}
		}
		setFilterRestaurant(filterRestaurantCopy)
		setFilterOther(filterOtherCopy)
		setIsLoading(false)
	}, [])

	const handleRestaurant = (array, index) => {
		let copy = [...array]
		copy[index].isActive = !copy[index].isActive
		setFilterRestaurant(copy)
	}

	const handleOther = (array, index) => {
		let copy = [...array]
		copy[index].isActive = !copy[index].isActive
		setFilterOther(copy)
	}

	return (
		<div className="filter-container">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<h2>Restaurants</h2>
					<div className="filter-item">
						{filterRestaurant.map((type, index) => {
							return (
								<button
									key={index}
									onClick={() => {
										handleRestaurant(
											filterRestaurant,
											index
										)
									}}
									className={
										type.isActive
											? "filter-selected-btn"
											: null
									}
								>
									<h4>{type.name}</h4>
								</button>
							)
						})}
					</div>

					<h2>Store & More</h2>
					<div className="filter-item">
						{filterOther.map((type, index) => {
							return (
								<button
									key={index}
									onClick={() => {
										handleOther(filterOther, index)
									}}
									className={
										type.isActive
											? "filter-selected-btn"
											: null
									}
								>
									<h4>{type.name}</h4>
								</button>
							)
						})}
					</div>
				</>
			)}
		</div>
	)
}

export default Filter
