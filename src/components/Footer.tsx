import { Component } from "react";
import "../styles/Footer.css";

export default class Footer extends Component {
  render(): JSX.Element {
    return (
      <div className="footer">
        <div className="footer__text">Made with ❤️ by Eight</div>
      </div>
    );
  }
}
