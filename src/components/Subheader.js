import React from "react"
import BackgroundImg from "../img/bg.home.large.monday.jpg"

import InputSearch from "./InputSearch"

const Subheader = props => {
	return (
		<section id="subheader-container">
			<div id="subheader-item">
				<img src={BackgroundImg} alt="Burger" />

				<div id="subheader-item--search">
					<h1>Find Vegan Restaurants Nearby</h1>
					<InputSearch
						styling="input-item"
						input={props.input}
						setInput={props.setInput}
					/>
				</div>
			</div>

			<div className="subheader-wave">
				<svg
					fill="#FFFFFF"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1366.5 217.5"
				>
					<path
						d="M0,601a1849.2,1849.2,0,0,1,370-47c246.77-6.15,360,41.14,613,38,95.54-1.19,226.52-9.76,383-42q-.26,108.75-.5,217.5H-.5Z"
						transform="translate(0.5 -550)"
					></path>
				</svg>
			</div>
		</section>
	)
}

export default Subheader
