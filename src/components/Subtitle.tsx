import { Component } from "react";
import "../styles/Subtitle.css";

type Props = {
	title: string;
	text?: string | JSX.Element;
};

export default class Subtitle extends Component<Props> {
	render(): JSX.Element {
		return (
			<>
				<header className="Subtitle">
					<div className="subtitle__section">
						<h2 className="subtitle__title">{this.props.title}</h2>
						<div className="subtitle__text">{this.props.text}</div>
					</div>
				</header>
			</>
		);
	}
}
