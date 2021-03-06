import { Component } from "react";
import "../styles/SkillCard.css";

type Props = {
  imageAlt: string;
  imagePath: string;
  projectUrl: string;
};

export default class SkillCard extends Component<Props> {
  render(): JSX.Element {
    return (
      <div className="skill-card">
        <a href={this.props.projectUrl}>
          <img
            alt={this.props.imageAlt}
            src={this.props.imagePath}
            className="skill-card__image"
            width={200}
            height={200}
            loading="lazy"
          />
        </a>
      </div>
    );
  }
}
