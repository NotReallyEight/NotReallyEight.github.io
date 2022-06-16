import { Component } from "react";
import "../styles/Skills.css";
import SkillCard from "./SkillCard";

export default class Skills extends Component {
  render(): JSX.Element {
    return (
      <div className="Skills">
        <div className="skills__container">
          <h2>Skills</h2>
          <div className="skills__type">Languages</div>
          <div className="skills__collection">
            <SkillCard
              imageAlt="JavaScript"
              imagePath="/images/javascript-logo.png"
              projectUrl="https://en.wikipedia.org/wiki/JavaScript"
            ></SkillCard>
            <SkillCard
              imageAlt="TypeScript"
              imagePath="/images/typescript-logo.png"
              projectUrl="https://www.typescriptlang.org"
            ></SkillCard>
            <SkillCard
              imageAlt="C#"
              imagePath="/images/c-sharp-logo.svg"
              projectUrl="https://docs.microsoft.com/en-us/dotnet/csharp"
            ></SkillCard>
            <SkillCard
              imageAlt="HTML5"
              imagePath="/images/html5-logo.png"
              projectUrl="https://en.wikipedia.org/wiki/HTML5"
            ></SkillCard>
            <SkillCard
              imageAlt="CSS3"
              imagePath="/images/css3-logo.png"
              projectUrl="https://en.wikipedia.org/wiki/CSS3"
            ></SkillCard>
          </div>
          <div className="skills__type">Frameworks</div>
          <div className="skills__collection">
            <SkillCard
              imageAlt="Express.js"
              imagePath="/images/expressjs-logo.png"
              projectUrl="https://expressjs.com"
            ></SkillCard>
            <SkillCard
              imageAlt="EJS"
              imagePath="/images/ejs-logo.png"
              projectUrl="https://ejs.co"
            ></SkillCard>
            <SkillCard
              imageAlt="React"
              imagePath="/images/react-logo.svg"
              projectUrl="https://reactjs.org"
            ></SkillCard>
            <SkillCard
              imageAlt="Next.js"
              imagePath="/images/nextjs-logo.png"
              projectUrl="https://nextjs.org"
            ></SkillCard>
          </div>
        </div>
      </div>
    );
  }
}
