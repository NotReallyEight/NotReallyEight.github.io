import { Component } from "react";
import "../styles/Introduction.css";
import Title from "./Title";

export default class Introduction extends Component {
  render() {
    return (
      <div className="introduction" id="introduction">
        <Title title="Hi, I'm Antonio Wang"></Title>
      </div>
    );
  }
}
