import FAQColumn from "./FAQColumn";

const FAQSection = () => {
  const questions = [
    "What programming languages do you know?",
    "What tools do you use?",
    "What frameworks / libraries do you use?",
  ];
  const answers = [
    `I mostly code in <strong class="javascript-text">JavaScript</strong> and <strong class="typescript-text">TypeScript</strong>, even though I use only TypeScript in my newer projects for how cool it is.`,
    `I use <strong class="visual-studio-code-text">Visual Studio Code</strong> as my main code editor.`,
    `I use the followings: <strong class="nodejs-text">Node.JS</strong> as my <strong class="javascript-text">JavaScript</strong> runtime, and <strong class="eris-text">Eris</strong> as my Discord API wrapper.`,
  ];
  return (
    <div className="faq">
      <div className="faq-columns">
        <FAQColumn question={questions[0]} answer={answers[0]} />
        <FAQColumn question={questions[1]} answer={answers[1]} />
        <FAQColumn question={questions[2]} answer={answers[2]} />
      </div>
    </div>
  );
};

export default FAQSection;
