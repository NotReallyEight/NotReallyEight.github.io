import { Link } from "react-router-dom";
import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h2>What about me?</h2>

        <p>
          Click <Link to="/about-me">here</Link> to know more about me.
        </p>
      </div>
    );
  }
}
