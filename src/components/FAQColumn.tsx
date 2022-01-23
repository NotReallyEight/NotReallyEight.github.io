import { FC } from "react";

const FAQColumn: FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  return (
    <div className="faq-column">
      <h3>{question}</h3>
      <p className="faq-text" dangerouslySetInnerHTML={{ __html: answer }}></p>
    </div>
  );
};

export default FAQColumn;
