import React from "react";
import "./code-section.scss";

const code = `
const myFunction = (numbers) => {
  for(var idx = 0; idx < consecutiveNumbers; idx++) {
    numbers
  }
};
`;

function CodeSection() {
  return (
    <section className="code-section">
      <pre>
        <code>{code}</code>
      </pre>

      <p className="description">
        Algorythm complexity O(n2), nested loops. <br />
      </p>
    </section>
  );
}

export default CodeSection;
