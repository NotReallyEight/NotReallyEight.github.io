import { Component } from "react";
import "../styles/Navbar.css";

export default class Navbar extends Component {
	render(): JSX.Element {
		return (
			<div className="Navbar">
				<img
					className="navbar__logo"
					src="/images/navbar-logo.png"
					alt="Navbar Logo"
				></img>
			</div>
		);
	}
}
