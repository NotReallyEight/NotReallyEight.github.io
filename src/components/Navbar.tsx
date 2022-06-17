import { Component } from "react";
import "../styles/Navbar.css";

type NavbarSection =
  | "about-me"
  | "experiences"
  | "introduction"
  | "projects"
  | "skills";

export default class Navbar extends Component {
  handleNavbarClick(section: NavbarSection): undefined {
    const home = document.querySelector(".home");
    const sectionElement = document.querySelector(`.${section}`) as HTMLElement;

    if (!home) return;

    window.history.pushState(null, "", `#${section}`);

    home.scrollTo({
      top: sectionElement.offsetTop,
      behavior: "smooth",
    });
  }

  render(): JSX.Element {
    return (
      <div className="navbar">
        <img
          className="navbar__logo"
          src="/images/navbar-logo.png"
          alt="Navbar Logo"
          width={100}
          height={100}
          onClick={() => this.handleNavbarClick("introduction")}
        ></img>
        <div className="navbar__links">
          <div
            className="navbar__link"
            onClick={() => {
              this.handleNavbarClick("about-me");
            }}
          >
            About Me
          </div>
          <div
            className="navbar__link"
            onClick={() => {
              this.handleNavbarClick("experiences");
            }}
          >
            Experiences
          </div>
          <div
            className="navbar__link"
            onClick={() => {
              this.handleNavbarClick("projects");
            }}
          >
            Projects
          </div>
          <div
            className="navbar__link"
            onClick={() => {
              this.handleNavbarClick("skills");
            }}
          >
            Skills
          </div>
        </div>
      </div>
    );
  }
}
