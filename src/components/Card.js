import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"

const Card = props => {
	const ratingStars = []
	const ratingModulo = props.offer.rating % 1
	const ratingRound = Math.ceil(props.offer.rating)
	console.log(ratingRound)

	for (let i = 0; i < 5; i++) {
		if (ratingModulo !== 0 && i === ratingRound - 1) {
			ratingStars.push(
				<FontAwesomeIcon
					icon={faStarHalfAlt}
					color="gold"
					fontSize={20}
				/>
			)
		} else if (i < props.offer.rating) {
			ratingStars.push(
				<FontAwesomeIcon
					key={i}
					icon={faStar}
					color="gold"
					fontSize={20}
				/>
			)
		} else {
			ratingStars.push(
				<FontAwesomeIcon
					key={i}
					icon={faStar}
					color="grey"
					fontSize={20}
				/>
			)
		}
	}

	return (
		<div className="card-item">
			<div className="card-item--favorite">
				<img src={props.offer.thumbnail} />
				<div className="card-item--icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						fill="none"
						stroke="#E80D6E"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						viewBox="0 0 24 24"
					>
						<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
					</svg>
				</div>
			</div>
			<div className="card-item-info">
				<h4>{props.offer.name}</h4>
				<span>{props.offer.adresse}</span>
				<span>{ratingStars}</span>
				<span>reviews</span>
				<p>{props.offer.description}</p>
			</div>
		</div>
	)
}

export default Card
