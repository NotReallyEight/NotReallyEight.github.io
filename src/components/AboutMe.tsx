import { Component } from "react";
import Subtitle from "./Subtitle";
import "../styles/AboutMe.css";

export default class AboutMe extends Component {
	introductionText =
		"Hello, I am NotReallyEight. I am a 15 years old back-end developer mostly working with TypeScript code bases. I am also the CEO of ATN Development (an open source not-for-profit organization) and a developer for TechHost.";

	render(): JSX.Element {
		return (
			<section className="AboutMe">
				<Subtitle title="About me" text={this.introductionText}></Subtitle>
			</section>
		);
	}
}
