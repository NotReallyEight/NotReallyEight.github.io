import { Component } from "react";
import "../styles/Skills.css";
import SkillCard from "./SkillCard";

export default class Skills extends Component {
  render(): JSX.Element {
    return (
      <div className="skills" id="skills">
        <div className="skills__container">
          <h2>Skills</h2>
          <div className="skills__type">Languages</div>
          <div className="skills__collection">
            <SkillCard
              imageAlt="JavaScript"
              imagePath="/images/javascript-logo.png"
              projectUrl="https://en.wikipedia.org/wiki/JavaScript"
            />
            <SkillCard
              imageAlt="TypeScript"
              imagePath="/images/typescript-logo.png"
              projectUrl="https://www.typescriptlang.org"
            />
            <SkillCard
              imageAlt="C#"
              imagePath="/images/c-sharp-logo.svg"
              projectUrl="https://docs.microsoft.com/en-us/dotnet/csharp"
            />
            <SkillCard
              imageAlt="HTML5"
              imagePath="/images/html5-logo.png"
              projectUrl="https://en.wikipedia.org/wiki/HTML5"
            />
            <SkillCard
              imageAlt="CSS3"
              imagePath="/images/css3-logo.png"
              projectUrl="https://en.wikipedia.org/wiki/CSS3"
            />
          </div>
          <div className="skills__type">Frameworks</div>
          <div className="skills__collection">
            <SkillCard
              imageAlt="Express.js"
              imagePath="/images/expressjs-logo.png"
              projectUrl="https://expressjs.com"
            />
            <SkillCard
              imageAlt="EJS"
              imagePath="/images/ejs-logo.png"
              projectUrl="https://ejs.co"
            />
            <SkillCard
              imageAlt="React"
              imagePath="/images/react-logo.svg"
              projectUrl="https://reactjs.org"
            />
            <SkillCard
              imageAlt="Next.js"
              imagePath="/images/nextjs-logo.png"
              projectUrl="https://nextjs.org"
            />
            <SkillCard
              imageAlt="Fastify"
              imagePath="/images/fastify-logo.png"
              projectUrl="https://fastify.io"
            />
            <SkillCard
              imageAlt="Node.js"
              imagePath="/images/nodejs-logo.png"
              projectUrl="https://nodejs.org"
            />
          </div>
          <div className="skills__type">Tools</div>
          <div className="skills__collection">
            <SkillCard
              imageAlt="Git"
              imagePath="/images/git-logo.png"
              projectUrl="https://git-scm.com/"
            />
          </div>
        </div>
      </div>
    );
  }
}
