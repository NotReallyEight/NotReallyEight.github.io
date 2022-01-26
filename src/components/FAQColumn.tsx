import { Component } from "react";

type FAQColumnProps = {
  answer: string;
  question: string;
};

export default class FAQColumn extends Component<FAQColumnProps> {
  render() {
    return (
      <div className="faq-column">
        <h3>{this.props.question}</h3>
        <p
          className="faq-text"
          dangerouslySetInnerHTML={{ __html: this.props.answer }}
        ></p>
      </div>
    );
  }
}
