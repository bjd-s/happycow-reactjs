import React from "react"

import Header from "../components/Header"
import Subheader from "../components/Subheader"
import CardGroup from "../components/CardGroup"

const Home = props => {
	return (
		<>
			<Header />

			<Subheader input={props.input} setInput={props.setInput} />

			<div className="content">
				<CardGroup
					restaurant={props.restaurant}
					setRestaurant={props.setRestaurant}
					isLoading={props.isLoading}
				/>
			</div>
		</>
	)
}

export default Home
