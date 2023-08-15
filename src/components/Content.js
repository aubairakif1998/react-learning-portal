import React from "react";
import "./Content.css"; // Import the Content CSS
import { Link, useNavigate } from "react-router-dom";

function Content({ concept }) {
  const history = useNavigate(); // Initialize useHistory

  return (
    <div className="content">
      <h2>{concept.title}</h2>
      <p>{concept.content}</p>

      <h3>Learn More:</h3>
      <div className="urls">
        {concept.urls.map((url, index) => (
          <div key={index} className="url">
            <div className="url-image">
              <img src={url.image} alt={url.title} />
            </div>
            <div className="url-details">
              <a href={url.link} target="_blank" rel="noopener noreferrer">
                {url.title}
              </a>
              <p>{url.description}</p>
              <a
                href={url.link}
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-button"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        className="start-quiz-button"
        onClick={() => history("/quiz", { replace: true })} // Use useHistory to navigate
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Content;
