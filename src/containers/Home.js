import React from "react"

import Header from "../components/Header"
import Subheader from "../components/Subheader"
import CardGroup from "../components/CardGroup"

const Home = () => {
	return (
		<>
			<Header />

			<Subheader />

			<div className="content">
				<CardGroup />
			</div>
		</>
	)
}

export default Home
