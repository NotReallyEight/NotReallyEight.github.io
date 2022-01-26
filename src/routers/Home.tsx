import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import HomeIntroduction from "../components/HomeIntroduction";
import Title from "../components/Title";
import { Component } from "react";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <DarkModeSwitch />
        <Title title="Hi, I'm NotReallyEight" />
        <HomeIntroduction />
        <FAQSection />
        <Footer />
      </div>
    );
  }
}
