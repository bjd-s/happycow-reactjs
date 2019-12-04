import React from "react"
import { Link } from "react-router-dom"
import Logo from "../img/logo-happycow.png"

const Header = props => {
	return (
		<header className={props.headerStyling}>
			<div id="header-container">
				<div className="header-item left-item">
					<Link to={"/"}>
						<img src={Logo} alt="Logo Happy Cow" />
					</Link>

					<Link to={"/restaurants"}>
						<p>Restaurants & stores</p>
					</Link>
				</div>

				<div className="header-item right-item">
					<Link to={"/Login"}>
						<p>Login / Join</p>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
