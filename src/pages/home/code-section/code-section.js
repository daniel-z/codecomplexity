import React from 'react';
import './code-section.css';

const code = `
const FNC = (numbers, consecutiveNumbers) => {
  let max = 0;
  let sum = 0;

  for(var idx = 0; idx < consecutiveNumbers; idx++) {
    sum += numbers[idx];
  }

  max = sum;

  for(var idx = 0; idx < numbers.length; idx++){
    const firstNum = numbers[idx];
    const newNum = numbers[idx + consecutiveNumbers];
    sum -= firstNum;
    sum += newNum;
    max = sum > max ? sum : max;
  }

  return max > 0 ? max : null;
};
`;

function CodeSection() {
  return (
    <pre>
      <code className="code-section">
        {code}
      </code>
    </pre>
  );
}

export default CodeSection;
