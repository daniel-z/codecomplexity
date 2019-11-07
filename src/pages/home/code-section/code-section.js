import React, { useState } from "react";
import "./code-section.scss";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const theCode = `
  const results = [];
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array.length; j++) {
      results.push(array[i]*array[j]);
    }    
  }
  return results;
`;

function buildFnc(fncCode) {
  return window.Function(`
    return (array) => {
      ${fncCode}
    };
  `)();
}

function CodeSection() {
  const [state, setState] = useState({
    code: theCode,
    fnc: buildFnc(theCode)
  });

  return (
    <section className="code-section">
      <Editor
        className="code-editor"
        value={state.code}
        onValueChange={code => {
          setState({
            code,
            fnc: buildFnc(theCode)
          });
        }}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14
        }}
      />

      <p className="description">
        Algorythm complexity O(n2), nested loops. <br />
      </p>
    </section>
  );
}

export default CodeSection;
