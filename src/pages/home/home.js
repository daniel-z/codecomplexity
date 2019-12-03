import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import CodeSection from "./code-section/code-section";
import CodeChart from "./code-chart/code-chart";
import "./home.scss";

const initialCode = `
  // inputArray contains all the inputs for your code
  // try to perform just time consuming operations
  // if you save data inside loops you can have a memory error

  const results = [];
  for(var i = 0; i < inputArray.length; i++) {
    for(var j = 0; j < inputArray.length; j++) {
      inputArray[i] + inputArray[j];
    }
  }

  return results;
`;

function Home() {
  const [state, setGlobalState] = useState({
    code: initialCode,
    runningTests: false,
    metrics: [
      {
        name: "",
        time: ""
      }
    ]
  });

  function updateCode(newCode) {
    setGlobalState({
      ...state,
      code: newCode
    });
  }

  function executeCode() {
    const { code } = state;

    try {
      const runTests = new Worker("ww.js");

      runTests.postMessage([
        {
          code,
          testcases: 4
        }
      ]);

      runTests.onmessage = message => {
        const metrics = message.data && message.data.length > 0 ? message.data : [];
        setGlobalState({
          ...state,
          metrics,
          runningTests: false
        });
      };
    } catch (err) {
      console.log(err);
    }
  }

  const { code, metrics, runningTests } = state;
  return (
    <div className="home page">
      <Grid doubling columns={2}>
        <Grid.Column width={16}>
          <p className="intro">Visualize your algorythm performance</p>
          <p className="details">
            Run your algorythm vs thousands of inputs and see how it permorms as the input size
            increases.
          </p>
        </Grid.Column>

        <Grid.Column>
          <CodeSection
            onCodeUpdate={updateCode}
            onRunCode={() => {
              setGlobalState({
                ...state,
                runningTests: true
              });

              setTimeout(() => {
                executeCode();
              });
            }}
            code={code}
          />
        </Grid.Column>
        <Grid.Column>
          <CodeChart data={metrics} loading={runningTests} />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Home;
