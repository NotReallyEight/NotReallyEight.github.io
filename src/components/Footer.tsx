import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h2>What about me?</h2>

      <p>
        Click <Link to="/about-me">here</Link> to know more about me.
      </p>
    </div>
  );
}
