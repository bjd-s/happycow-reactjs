import React from "react"
import { favorite_border } from "@material-ui/icons"

const Card = props => {
	console.log("props offer is ", props.offer)

	return (
		<div className="card-item">
			<div className="card-item--favorite">
				<img src={props.offer.thumbnail} />
				<favorite_border />
			</div>
			<div className="card-item-info">
				<h4>{props.offer.name}</h4>
				<span>{props.offer.adresse}</span>
				<span>{props.offer.rating}</span>
				<span>reviews</span>
				<p>{props.offer.description}</p>
			</div>
		</div>
	)
}

export default Card
