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
      <span className="experiences__title">TechHost, UK - Developer</span>
      <span className="experiences__description">
        <br></br>FEBRUARY 2022 - PRESENT<br></br>Quick and reliable hosting.
        <br></br>
      </span>
      <span className="experiences__title">Foodintab, Italy - CTO</span>
      <span className="experiences__description">
        <br></br>JULY 2022 - PRESENT<br></br>An app to find restaurants around
        you and manage your restaurant.
      </span>
    </div>
  );

  render(): JSX.Element {
    return (
      <div className="experiences" id="experiences">
        <Subtitle title="Experiences" text={this.experiencesText}></Subtitle>
      </div>
    );
  }
}
