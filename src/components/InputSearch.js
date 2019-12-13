import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"

const InputSearch = props => {
	const [checkInput, setCheckInput] = useState(false)
	let history = useHistory()

	const handleInput = () => {
		if (props.input.match(/[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)) {
			setCheckInput(true)
			history.push("/")
		} else {
			if (props.input === "paris") {
				history.push("/Location")
			}
		}
	}

	return (
		<div className={props.styling + " input-item"}>
			<input
				className={checkInput ? "false-input" : null}
				type="text"
				placeholder="Search for city, or zipcode"
				value={props.input}
				onChange={e => {
					props.setInput(e.target.value)
				}}
				onKeyDown={handleInput}
			></input>

			<div className="icon-item">
				<SearchIcon style={{ color: "#FFFFFF" }}></SearchIcon>
			</div>
		</div>
	)
}

export default InputSearch
