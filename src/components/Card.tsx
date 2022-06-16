import { Component } from "react";
import "../styles/Card.css";

type Props = {
  imageAlt: string;
  imagePath: string;
  text: string;
  title: string;
  projectUrl: string;
  githubUrl: string;
};

export default class Card extends Component<Props> {
  render(): JSX.Element {
    return (
      <div className="Card">
        <img
          src={this.props.imagePath}
          alt={this.props.imageAlt}
          className="card__image"
          loading="lazy"
        ></img>
        <div className="card__paragraph">
          <a href={this.props.projectUrl} target={"_blank"} rel="noreferrer">
            <span className="card__title">{this.props.title}</span>
          </a>
          <br></br>
          <span className="card__text">{this.props.text}</span>
          <br></br>
          <a
            href={this.props.githubUrl}
            target={"_blank"}
            rel="noreferrer"
            className="card__github"
          >
            Learn more about {this.props.imageAlt}
          </a>
        </div>
      </div>
    );
  }
}
