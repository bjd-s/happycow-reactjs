import React, { useState } from "react"

import InputSearch from "../components/InputSearch"
import Card from "../components/Card"

const Location = props => {
	return (
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

					<div id="location-item--wrapper">
						{props.isLoading ? (
							<p>Chargement...</p>
						) : (
							<div className="card-container">
								{props.restaurant
									.slice(0, 29)
									.map((offer, index) => {
										return (
											<Card key={index} offer={offer} />
										)
									})}
							</div>
						)}
					</div>
				</div>
			</div>

			<div className="location-item location-item--right"></div>
		</section>
	)
}

export default Location
