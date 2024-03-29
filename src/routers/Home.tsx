import "../styles/Home.css";
import { Component } from "react";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import ProjectSection from "../components/ProjectSection";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default class Home extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      previousScrollPosition: 0,
    };
  }

  handleScroll(thisKeyword: Home) {
    const homeElement = document.querySelector(".home");
    let currentScrollPosition = homeElement?.scrollTop ?? 0;
    if (
      (thisKeyword.state as Readonly<{ previousScrollPosition: number }>)
        .previousScrollPosition < currentScrollPosition
    )
      (document.querySelector(".navbar") as HTMLElement).style.top = "-100%";
    else (document.querySelector(".navbar") as HTMLElement).style.top = "0";

    thisKeyword.setState({ previousScrollPosition: currentScrollPosition });
    return undefined;
  }

  render(): JSX.Element {
    return (
      <div className="home" dir="ltr" onScroll={() => this.handleScroll(this)}>
        <Introduction></Introduction>
        <Navbar></Navbar>
        <AboutMe></AboutMe>
        <Experiences></Experiences>
        <Projects></Projects>
        <ProjectSection
          imageAlt="Erebus"
          imagePath="/images/erebus.webp"
          text="From the darkness to you, bring your Discord bot to a next level."
          title="Erebus - Discord API Wrapper"
          projectUrl="https://erebus.js.org"
          githubUrl="https://github.com/ATN-Development/erebus"
        ></ProjectSection>
        <ProjectSection
          imageAlt="ATN Modmail"
          imagePath="/images/atn-modmail.webp"
          text="ATN Modmail is an easy to use Discord Modmail bot! This is also a nice alternative to premade Modmail bots because of the customisable things that you can find!"
          title="ATN Modmail — Discord Modmail Bot"
          projectUrl="https://notreallyeight.xyz"
          githubUrl="https://github.com/ATN-Development/atn-modmail"
        ></ProjectSection>
        <ProjectSection
          imageAlt="Discorder"
          imagePath="/images/discorder.webp"
          text="A secure Discord logging API."
          title="Discorder - REST API"
          projectUrl="https://discorder.techhost.pro/"
          githubUrl="https://discorder.techhost.pro/"
        ></ProjectSection>
        <Skills></Skills>
        <Footer></Footer>
      </div>
    );
  }
}
