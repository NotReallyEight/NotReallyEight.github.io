import { Component } from "react";
import "../styles/Experiences.css";
import Subtitle from "./Subtitle";

export default class Experiences extends Component {
	experiencesText = (
		<div>
			<span className="experiences__title">ATN Development, Italy - CEO</span>
			<span className="experiences__description">
				<br></br>AUGUST 2020 - PRESENT<br></br>Open source non-profit company
				for Discord related projects and much more.<br></br>
			</span>
			<span className="experiences__title">TechHost, Malta - Developer</span>
			<span className="experiences__description">
				<br></br>FEBRUARY 2022 - PRESENT<br></br>Quick and reliable hosting.
			</span>
		</div>
	);

	render(): JSX.Element {
		return (
			<div className="Experiences">
				<Subtitle title="Experiences" text={this.experiencesText}></Subtitle>
			</div>
		);
	}
}
