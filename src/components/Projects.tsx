import { Component } from "react";
import Subtitle from "./Subtitle";
import "../styles/Projects.css";

export default class Projects extends Component {
	render(): JSX.Element {
		return (
			<div className="Projects">
				<Subtitle title="Projects"></Subtitle>
			</div>
		);
	}
}
