import React from "react"
import Card from "../components/Card"

const FilterGroup = props => {
	const checkRestaurant = index => {
		let found = false
		props.handleRestaurant(props.filterRestaurant, index)
		for (let i = 0; i < props.filterRestaurant.length; i++) {
			if (props.filterRestaurant[i].isActive) {
				props.setIsFilter(true)
				found = true
			}
		}

		if (found === false) {
			props.setIsFilter(false)
		}
	}

	const checkOther = index => {
		let found = false
		props.handleOther(props.filterOther, index)
		for (let i = 0; i < props.filterOther.length; i++) {
			if (props.filterOther[i].isActive) {
				props.setIsFilter(true)
				found = true
			}
		}

		if (found === false) {
			props.setIsFilter(false)
		}
	}

	const restaurants = props.restaurant
		.filter(restaurant => {
			for (let i = 0; i < props.filterRestaurant.length; i++) {
				if (props.filterRestaurant[i].isActive) {
					if (props.filterRestaurant[i].name === restaurant.type) {
						return true
					}
				}
			}

			return false
		})
		.slice(0, 49)

	const others = props.restaurant
		.filter(other => {
			for (let i = 0; i < props.filterOther.length; i++) {
				if (props.filterOther[i].isActive) {
					if (props.filterOther[i].name === other.type) {
						return true
					}
				}
			}

			return false
		})
		.slice(0, 49)

	return (
		<div className="filter-container">
			{props.isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<h2>Restaurants</h2>
					<div className="filter-item">
						{props.filterRestaurant.map((type, index) => {
							return (
								<button
									key={index}
									onClick={() => {
										checkRestaurant(index)
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
						{props.filterOther.map((type, index) => {
							return (
								<button
									key={index}
									onClick={() => {
										checkOther(index)
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

					<div id="location-item--wrapper">
						{props.isLoading ? (
							<p>Chargement...</p>
						) : props.isFilter ? (
							<div className="card-container">
								{restaurants.map((offer, index) => {
									return <Card key={index} offer={offer} />
								})}
							</div>
						) : (
							<div className="card-container">
								{props.restaurant
									.slice(0, 49)
									.map((offer, index) => {
										return (
											<Card key={index} offer={offer} />
										)
									})}
							</div>
						)}
					</div>

					<div id="location-item--wrapper">
						{props.isLoading ? (
							<p>Chargement...</p>
						) : props.isFilter ? (
							<div className="card-container">
								{others.map((offer, index) => {
									return <Card key={index} offer={offer} />
								})}
							</div>
						) : (
							<div className="card-container">
								{props.restaurant
									.slice(0, 49)
									.map((offer, index) => {
										return (
											<Card key={index} offer={offer} />
										)
									})}
							</div>
						)}
					</div>
				</>
			)}
		</div>
	)
}

export default FilterGroup
