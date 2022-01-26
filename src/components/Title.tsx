import { Component } from "react";

type TitleProps = {
  title: string;
};

export default class Title extends Component<TitleProps> {
  title: string = this.props.title;
  render() {
    return (
      <div>
        <header className="Title">
          <h1>{this.title}</h1>
        </header>
      </div>
    );
  }
}
