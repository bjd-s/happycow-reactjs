import React, { useState, useEffect } from "react"

import Header from "../components/Header"
import InputSearch from "../components/InputSearch"
import Geolocation from "../components/Geolocation"
import FilterGroup from "../components/FilterGroup"

const Location = props => {
	const [isFilter, setIsFilter] = useState(false)
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
		props.setIsLoading(false)
	}, [])

	const handleRestaurant = (array, index) => {
		let copyRestaurant = [...array]
		copyRestaurant[index].isActive = !copyRestaurant[index].isActive
		setFilterRestaurant(copyRestaurant)
	}

	const handleOther = (array, index) => {
		let copyOther = [...array]
		copyOther[index].isActive = !copyOther[index].isActive
		setFilterOther(copyOther)
	}

	return (
		<>
			<Header headerStyling="header-position" />

			<section id="location-container">
				<div className="location-item location-item--left">
					<div className="left-item--header">
						<p>
							We found {props.restaurant.length} results for
							{" " + props.input}
						</p>

						<InputSearch
							styling="location-input-item"
							input={props.input}
							setInput={props.setInput}
						/>

						<FilterGroup
							isLoading={props.isLoading}
							filterType={props.filterType}
							filterRestaurant={filterRestaurant}
							filterOther={filterOther}
							handleRestaurant={handleRestaurant}
							handleOther={handleOther}
							restaurant={props.restaurant}
							isFilter={isFilter}
							setIsFilter={setIsFilter}
						/>
					</div>
				</div>

				<div className="location-item location-item--right">
					<div id="mapid">
						<Geolocation />
					</div>
				</div>
			</section>
		</>
	)
}

export default Location
