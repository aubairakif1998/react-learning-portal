import React from "react";

function Result({ answers, questions }) {
  const correctAnswers = answers.filter(
    (answer, index) => answer === questions[index].correctOption
  );

  return (
    <div className="result">
      <h3>Quiz Results</h3>
      <p>
        You answered {correctAnswers.length} out of {questions.length} questions
        correctly.
      </p>
      <ul>
        {questions.map((question, index) => (
          <li
            key={index}
            className={
              answers[index] === question.correctOption
                ? "correct"
                : "incorrect"
            }
          >
            {question.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Result;
