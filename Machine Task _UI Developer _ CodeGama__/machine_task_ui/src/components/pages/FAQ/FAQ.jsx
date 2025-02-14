import React, { useState } from "react";
import "./FAQ.scss";

const faqs = [
  {
    question: "What is the conversion % of MetaForm?",
    answer: `At the moment, I’m pretty happy where I am. Currently I am not looking 
    for any full-time opportunities. But that being said, I am always open to discussing 
    interesting opportunities, collaborations or other fun stuff. If you’re interested in 
    discussing a project, making something great together, please fill the form above. 
    Imbly want to get in touch?`,
  },
  {
    question: "How do your quote pricing works and when we get on call?",
  },
  {
    question: "Can you facelift my design?",
  },
  {
    question: "Can you facelift my design?",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="section8">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          A community for India's investors hang out and talk about investments,
          personal finance
        </p>

        <div className="faq-items">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="toggle-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className="faq-answer"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
