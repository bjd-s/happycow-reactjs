import React from "react"
import Header from "../components/Header"

const Restaurant = props => {
	console.log(props)
	return (
		<>
			<Header />

			<section id="restaurant-container">
				<div>
					<p>Page restaurant</p>
				</div>
			</section>
		</>
	)
}

export default Restaurant
