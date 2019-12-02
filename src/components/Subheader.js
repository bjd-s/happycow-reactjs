import React from "react"
import BackgroundImg from "../img/bg.home.large.monday.jpg"

const Subheader = () => {
	return (
		<section id="subheader-container">
			<div id="subheader-item">
				<img src={BackgroundImg} alt="Burger" />

				<div id="subheader-item--search">
					<h1>Find Vegan Restaurants Nearby</h1>

					<input
						type="text"
						placeholder="Search for city, or zipcode"
					></input>
				</div>
			</div>
		</section>
	)
}

export default Subheader
