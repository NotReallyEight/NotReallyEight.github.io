import { Component } from "react";
import "../styles/ProjectSection.css";
import Card from "./Card";

type Props = {
	imageAlt: string;
	imagePath: string;
	text: string;
	title: string;
	projectUrl: string;
	githubUrl: string;
};

export default class ProjectSection extends Component<Props> {
	render(): JSX.Element {
		return (
			<div className="ProjectSection">
				<Card {...this.props}></Card>
			</div>
		);
	}
}
