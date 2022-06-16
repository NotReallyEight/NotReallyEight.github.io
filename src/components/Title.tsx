import { Component } from "react";
import "../styles/Title.css";

type TitleProps = {
  title: string;
};

export default class Title extends Component<TitleProps> {
  render() {
    return (
      <>
        <header className="Title">
          <h1 className="title__text">{this.props.title}</h1>
        </header>
      </>
    );
  }
}
