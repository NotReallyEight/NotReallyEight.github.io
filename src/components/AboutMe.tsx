import { Component } from "react";
import Subtitle from "./Subtitle";
import "../styles/AboutMe.css";

export default class AboutMe extends Component {
  introductionText =
    "Hello, I am Antonio Wang. I am a 17 years old full stack developer mostly working with TypeScript code bases. I also occasionally work at ATN Development (an open source not-for-profit organisation) and as a developer at TechHost.";

  render(): JSX.Element {
    return (
      <div className="about-me" id="about-me">
        <Subtitle title="About me" text={this.introductionText}></Subtitle>
      </div>
    );
  }
}
