import React from "react";

function Sidebar({ concepts, setActiveConcept }) {
  return (
    <div className="sidebar">
      <ul>
        {concepts.map((concept, index) => (
          <li key={index} onClick={() => setActiveConcept(index)}>
            {concept.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
