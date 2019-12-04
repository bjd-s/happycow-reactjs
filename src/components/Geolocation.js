import React, { useState, useEffect } from "react"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"

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

	return (
		<>
			{isLoading ? (
				<p>Loading</p>
			) : (
				<Map center={[latitude, longitude]} zoom={13}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
					<Marker position={[latitude, longitude]}>
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
