import { Component } from "react";
import Subtitle from "./Subtitle";
import "../styles/AboutMe.css";

export default class AboutMe extends Component {
  introductionText =
    "Hello, I am NotReallyEight. I am a 16 years old full stack developer mostly working with TypeScript code bases. I am also the CEO of ATN Development (an open source not-for-profit organization), a developer for TechHost and the CTO of Foodintab.";

  render(): JSX.Element {
    return (
      <div className="about-me" id="about-me">
        <Subtitle title="About me" text={this.introductionText}></Subtitle>
      </div>
    );
  }
}
