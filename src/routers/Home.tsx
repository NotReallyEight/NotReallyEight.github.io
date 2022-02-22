import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import HomeIntroduction from "../components/HomeIntroduction";
import Title from "../components/Title";
import { Component } from "react";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default class Home extends Component {
  state = {
    darkModeEnabled:
      localStorage.getItem("darkmode") === "true" ||
      localStorage.getItem("darkmode") == null,
  };

  handler = this.handleDarkModeChange.bind(this);

  handleDarkModeChange(): void {
    this.setState({
      darkModeEnabled: this.state.darkModeEnabled,
    });
  }

  render(): JSX.Element {
    return (
      <div className="Home">
        <DarkModeSwitch action={this.handleDarkModeChange}/>
        <Title title="Hi, I'm NotReallyEight" />
        <HomeIntroduction />
        <FAQSection />
        <Footer />
      </div>
    );
  }
}
