import React from "react"

import Subheader from "../components/Subheader"
import CardGroup from "../components/CardGroup"

const Home = props => {
	return (
		<>
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
