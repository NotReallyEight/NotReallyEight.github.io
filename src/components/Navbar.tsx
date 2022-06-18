import { Component } from "react";
import "../styles/Navbar.css";

type NavbarSection =
  | "about-me"
  | "experiences"
  | "introduction"
  | "projects"
  | "skills";

export default class Navbar extends Component {
  handleDropdownClick(): undefined {
    const dropdownMenu = document.querySelector(".navbar__dropdown-menu");
    const dropdownSections = document.querySelector(
      ".navbar__dropdown-sections"
    );

    if (!dropdownMenu || !dropdownSections) return;

    if (!dropdownMenu.classList.contains("navbar__dropdown-menu--open"))
      dropdownMenu.classList.add("navbar__dropdown-menu--open");
    else dropdownMenu.classList.remove("navbar__dropdown-menu--open");

    if (
      !dropdownSections.classList.contains("navbar__dropdown-sections--open")
    ) {
      dropdownSections.classList.add("navbar__dropdown-sections--open");
      if (
        dropdownSections.classList.contains("navbar__dropdown-sections--close")
      )
        dropdownSections.classList.remove("navbar__dropdown-sections--close");
    } else {
      dropdownSections.classList.remove("navbar__dropdown-sections--open");
      if (
        !dropdownSections.classList.contains("navbar__dropdown-sections--close")
      )
        dropdownSections.classList.add("navbar__dropdown-sections--close");
    }
    return;
  }

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
      <>
        <div className="navbar">
          <img
            className="navbar__logo"
            src="/images/navbar-logo.png"
            alt="Navbar Logo"
            width={60}
            height={60}
            onClick={() => this.handleNavbarClick("introduction")}
          ></img>
          <div className="navbar__links">
            <button
              className="navbar__link"
              onClick={() => {
                this.handleNavbarClick("about-me");
              }}
            >
              About Me
            </button>
            <button
              className="navbar__link"
              onClick={() => {
                this.handleNavbarClick("experiences");
              }}
            >
              Experiences
            </button>
            <button
              className="navbar__link"
              onClick={() => {
                this.handleNavbarClick("projects");
              }}
            >
              Projects
            </button>
            <button
              className="navbar__link"
              onClick={() => {
                this.handleNavbarClick("skills");
              }}
            >
              Skills
            </button>
          </div>
          <div
            className="navbar__dropdown-menu"
            onClick={this.handleDropdownClick}
          >
            <div className="navbar__dropdown-burger"></div>
          </div>
          <div className="navbar__dropdown-sections">
            <button
              className="navbar__dropdown-section"
              onClick={() => {
                this.handleNavbarClick("about-me");
              }}
            >
              About Me
            </button>
            <button
              className="navbar__dropdown-section"
              onClick={() => {
                this.handleNavbarClick("experiences");
              }}
            >
              Experiences
            </button>
            <button
              className="navbar__dropdown-section"
              onClick={() => {
                this.handleNavbarClick("projects");
              }}
            >
              Projects
            </button>
            <button
              className="navbar__dropdown-section"
              onClick={() => {
                this.handleNavbarClick("skills");
              }}
            >
              Skills
            </button>
          </div>
        </div>
      </>
    );
  }
}
