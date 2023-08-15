import React from "react";
import "./Question.css"; // Import the Question CSS

function Question({ question, handleAnswer }) {
  return (
    <div className="question">
      <h3>{question.text}</h3>
      <ul className="options">
        {question.options.map((option) => (
          <li
            key={option.id}
            className="option"
            onClick={() => handleAnswer(option.id)}
          >
            <input
              type="radio"
              name="answer"
              id={`option-${option.id}`}
              value={option.id}
            />
            <label htmlFor={`option-${option.id}`} className="option-label">
              {option.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
