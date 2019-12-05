import React, { useState, useEffect } from "react"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"

//import "leaflet/dist/leaflet.css"

const Geolocation = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [latitude, setLatitude] = useState(48.8534)
	const [longitude, setLongitude] = useState(2.3488)

	useEffect(() => {
		const success = pos => {
			let crd = pos.coords
			setLatitude(crd.latitude)
			setLongitude(crd.longitude)
		}
		navigator.geolocation.getCurrentPosition(success)
		setIsLoading(false)
	}, [])

	let position = [latitude, longitude]

	return (
		<>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<Map center={position} zoom={13}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
					<Marker position={position}>
						<Popup>
							A pretty CSS3 popup.
							<br />
							Easily customizable.
						</Popup>
					</Marker>
				</Map>
			)}
		</>
	)
}

export default Geolocation
