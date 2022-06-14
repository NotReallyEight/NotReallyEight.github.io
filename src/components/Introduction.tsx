import { Component } from "react";
import "../styles/Introduction.css";
import Title from "./Title";

export default class Introduction extends Component {
	render() {
		return (
			<div className="Introduction">
				<Title title="Hi, I'm NotReallyEight"></Title>
			</div>
		);
	}
}
