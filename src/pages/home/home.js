import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import CodeSection from "./code-section/code-section";
import CodeChart from "./code-chart/code-chart";
import "./home.scss";

const initialCode = `
  const results = [];
  for(var i = 0; i < inputArray.length; i++) {
    for(var j = 0; j < inputArray.length; j++) {
      results.push(inputArray[i]*inputArray[j]);
    }
  }
  return results;
`;

function buildFnc(fncCode) {
  return window.Function(`
    return (inputArray) => {
      ${fncCode}
    };
  `)();
}

function Home() {
  const [state, setGlobalState] = useState({
    code: initialCode,
    actualFnc: buildFnc(initialCode),
    runningTests: false,
    metrics: [
      {
        name: "",
        time: ""
      }
    ]
  });

  const updateCode = newCode => {
    setGlobalState({
      ...state,
      code: newCode,
      actualFnc: buildFnc(newCode)
    });
  };

  function* generateIterator(limit) {
    let idx = 0;
    while (idx < limit) yield idx++;
  }

  function runTests(testFnc, tests) {
    const cases = generateIterator(4);
    const metrics = [];
    let actualCase = cases.next();

    return new Promise(function(resolve, reject) {
      while (actualCase.done !== true) {
        let arrayItems = 10 ** (actualCase.value + 1);
        const caseArray = Array.from(Array(arrayItems).keys());
        const startTime = Date.now();

        testFnc(caseArray);
        const endTime = Date.now();

        metrics.push({
          name: `i${arrayItems}`,
          time: endTime - startTime
        });
        actualCase = cases.next();
      }

      resolve(metrics);
    });
  }

  function executeCode() {
    const { actualFnc } = state;

    try {
      runTests(actualFnc, 4).then(metrics => {
        setTimeout(() => {
          setGlobalState({
            ...state,
            metrics,
            runningTests: false
          });
        });
      });
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
