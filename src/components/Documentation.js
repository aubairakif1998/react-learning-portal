// import React, { useState } from "react";
// import "./Documentation.css";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import Content from "./Content";

// function Documentation() {
//   const [activeConcept, setActiveConcept] = useState(0);

//   return (
//     <div className="Documentation">
//       <Navbar />
//       <div className="content-container">
//         <Sidebar concepts={concepts} setActiveConcept={setActiveConcept} />
//         <Content concept={concepts[activeConcept]} />
//       </div>
//     </div>
//   );
// }

// export default Documentation;
// Documentation.js
import React, { useState } from "react";
import "./Documentation.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Quiz from "./Quiz"; // Import the Quiz component

const concepts = [
  {
    title: "Introduction to React",
    content: "React is a JavaScript library for building user interfaces...",
    urls: [
      {
        title: "React Official Documentation",
        description: "Learn more about React from its official documentation.",
        link: "https://reactjs.org/docs/getting-started.html",
        image: "react_logo.png", // Add the path to your image
      },
    ],
  },
  {
    title: "React ES6",
    content: "Learn how to use modern ES6 features with React.",
    urls: [
      {
        title: "ES6 Features",
        description:
          "Explore ES6 features like arrow functions, destructuring, and more.",
        link: "https://www.w3schools.com/js/js_es6.asp",
      },
    ],
  },
  {
    title: "React Rendering HTML",
    content: "Understand how React renders HTML elements.",
    urls: [
      {
        title: "React Rendering",
        description: "Learn about React's rendering process.",
        link: "https://reactjs.org/docs/rendering-elements.html",
      },
    ],
  },
  {
    title: "React JSX",
    content:
      "JSX is a syntax extension for JavaScript, often used with React to describe what the UI should look like...",
    urls: [
      {
        title: "JSX Introduction",
        description: "Introduction to JSX syntax and usage.",
        link: "https://reactjs.org/docs/introducing-jsx.html",
      },
    ],
  },
  {
    title: "React Components",
    content: "Components are the building blocks of React applications...",
    urls: [
      {
        title: "Components and Props",
        description: "Learn about React components and their props.",
        link: "https://reactjs.org/docs/components-and-props.html",
      },
    ],
  },
  {
    title: "React Class Components",
    content:
      "Class components were the original way to write components in React...",
    urls: [
      {
        title: "React Class Components",
        description:
          "Explore React's class components and their lifecycle methods.",
        link: "https://reactjs.org/docs/react-component.html",
      },
    ],
  },
  {
    title: "React Props",
    content: "Props are a way to pass data from parent to child components...",
    urls: [
      {
        title: "Components and Props",
        description: "Learn about React components and their props.",
        link: "https://reactjs.org/docs/components-and-props.html",
      },
    ],
  },
  {
    title: "React Events",
    content: "React events are named using camelCase instead of lowercase...",
    urls: [
      {
        title: "Handling Events",
        description: "Learn how to handle events in React components.",
        link: "https://reactjs.org/docs/handling-events.html",
      },
    ],
  },
  {
    title: "React Conditionals",
    content:
      "Use conditional statements to control the rendering of components...",
    urls: [
      {
        title: "Conditional Rendering",
        description: "Learn about conditional rendering in React.",
        link: "https://reactjs.org/docs/conditional-rendering.html",
      },
    ],
  },
  {
    title: "React Lists",
    content: "Learn how to render lists of items in React components...",
    urls: [
      {
        title: "Lists and Keys",
        description: "Guide to rendering lists in React with keys.",
        link: "https://reactjs.org/docs/lists-and-keys.html",
      },
    ],
  },
  {
    title: "React Forms",
    content: "Handle form elements and user input in React applications...",
    urls: [
      {
        title: "Forms",
        description: "Guide to handling forms in React.",
        link: "https://reactjs.org/docs/forms.html",
      },
    ],
  },
  {
    title: "React Router",
    content: "Learn about routing in React applications...",
    urls: [
      {
        title: "React Router",
        description: "Explore React Router for navigation.",
        link: "https://reactrouter.com/web/guides/quick-start",
      },
    ],
  },
  {
    title: "React Memo",
    content: "Optimize functional components using React's memoization...",
    urls: [
      {
        title: "React Memo",
        description:
          "Guide to using React's memoization for performance optimization.",
        link: "https://reactjs.org/docs/react-api.html#reactmemo",
      },
    ],
  },
  {
    title: "React CSS Styling",
    content: "Learn how to apply CSS styling to React components...",
    urls: [
      {
        title: "Styling and CSS",
        description: "Guide to styling React components with CSS.",
        link: "https://reactjs.org/docs/faq-styling.html",
      },
    ],
  },
  {
    title: "React Sass Styling",
    content: "Explore using Sass for styling React components...",
    urls: [
      {
        title: "Styling and CSS",
        description: "Guide to styling React components with CSS.",
        link: "https://reactjs.org/docs/faq-styling.html",
      },
      {
        title: "Sass Official Documentation",
        description: "Learn more about Sass for advanced styling.",
        link: "https://sass-lang.com/documentation",
      },
    ],
  },
  {
    title: "React Hooks - useState & useEffect",
    content:
      "Learn about React's functional component hooks for state and side effects...",
    urls: [
      {
        title: "Hooks at a Glance",
        description:
          "Overview of React hooks, including useState and useEffect.",
        link: "https://reactjs.org/docs/hooks-overview.html",
      },
    ],
  },
  {
    title: "React Hooks - useReducer & useRef",
    content:
      "Explore more hooks: useReducer for complex state and useRef for accessing DOM elements...",
    urls: [
      {
        title: "Hooks API Reference",
        description: "Detailed reference for React hooks.",
        link: "https://reactjs.org/docs/hooks-reference.html",
      },
    ],
  },
  {
    title: "React State Management with Redux",
    content:
      "Learn how to manage state in larger React applications using Redux...",
    urls: [
      {
        title: "Redux Official Documentation",
        description: "Learn more about Redux for state management.",
        link: "https://redux.js.org/introduction/getting-started",
      },
    ],
  },
  // Add more concepts here
];
function Documentation() {
  const [activeConcept, setActiveConcept] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false); // State to control quiz display
  return (
    <div className="Documentation">
      <Navbar />
      <div className="content-container">
        <Sidebar concepts={concepts} setActiveConcept={setActiveConcept} />
        {!showQuiz ? (
          <Content
            concept={concepts[activeConcept]}
            showQuiz={() => setShowQuiz(true)} // Function to show quiz
          />
        ) : (
          <Quiz />
        )}
      </div>
    </div>
  );
}

export default Documentation;
