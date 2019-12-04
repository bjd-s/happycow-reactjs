import React from "react"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"

const Geolocation = () => {
	const position = [48.8534, 2.3488]

	return (
		<>
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
		</>
	)
}

export default Geolocation
