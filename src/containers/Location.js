import React from "react"

import Header from "../components/Header"
import InputSearch from "../components/InputSearch"
import Card from "../components/Card"
import Geolocation from "../components/Geolocation"
import FilterGroup from "../components/FilterGroup"

const Location = props => {
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

						<FilterGroup restaurant={props.restaurant} />

						<div id="location-item--wrapper">
							{props.isLoading ? (
								<p>Chargement...</p>
							) : (
								<div className="card-container">
									{props.restaurant
										.slice(0, 29)
										.map((offer, index) => {
											return (
												<Card
													key={index}
													offer={offer}
												/>
											)
										})}
								</div>
							)}
						</div>
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
