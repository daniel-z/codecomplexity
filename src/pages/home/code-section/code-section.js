import React from "react";
import "./code-section.scss";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

function CodeSection(props) {
  const { onCodeUpdate, onRunCode, code } = props;

  return (
    <section className="code-section">
      <Editor
        className="code-editor"
        value={code}
        onValueChange={onCodeUpdate}
        highlight={hcode => highlight(hcode, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14
        }}
      />

      <p className="description">
        <button className="run-code" onClick={onRunCode}>
          Run >
        </button>
      </p>
    </section>
  );
}

export default CodeSection;
