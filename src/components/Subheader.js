import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import BackgroundImg from "../img/bg.home.large.monday.jpg"
import SearchIcon from "@material-ui/icons/Search"

const Subheader = () => {
	const [input, setInput] = useState("")
	let history = useHistory()

	const handleInput = () => {
		if (input === "paris") {
			history.push("/Location")
		} else {
			console.log("error")
		}
	}

	return (
		<section id="subheader-container">
			<div id="subheader-item">
				<img src={BackgroundImg} alt="Burger" />

				<div id="subheader-item--search">
					<h1>Find Vegan Restaurants Nearby</h1>

					<div id="subheader-item--input">
						<input
							type="text"
							placeholder="Search for city, or zipcode"
							onChange={e => {
								setInput(e.target.value)
							}}
							onKeyDown={handleInput}
						></input>

						<div id="subheader-item--icon">
							<SearchIcon
								style={{ color: "#FFFFFF" }}
							></SearchIcon>
						</div>
					</div>
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
