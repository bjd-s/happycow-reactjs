import React from "react"
import { useHistory } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"

const InputSearch = props => {
	let history = useHistory()

	const handleInput = () => {
		if (props.input === "paris") {
			history.push("/Location")
		} else {
			history.push("/")
		}
	}

	return (
		<div className={props.styling + " input-item"}>
			<input
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
