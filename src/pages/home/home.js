import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import CodeSection from "./code-section/code-section";
import CodeChart from "./code-chart/code-chart";
import "./home.scss";

const initialCode = `
  const results = [];
  for(var i = 0; i < myArray.length; i++) {
    for(var j = 0; j < myArray.length; j++) {
      results.push(myArray[i]*myArray[j]);
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

const data = [
  {
    name: "L 1,000",
    time: 1000
  },
  {
    name: "L 10,000",
    time: 3000
  },
  {
    name: "L 100,000",
    time: 4000
  },
  {
    name: "L 1,000,000",
    time: 20000
  },
  {
    name: "L 10,000,000",
    time: 50000
  }
];

function Home() {
  const [state, setGlobalState] = useState({
    code: initialCode,
    actualFnc: buildFnc(initialCode)
  });

  const updateCode = newCode => {
    setGlobalState({
      code: newCode,
      actualFnc: buildFnc(newCode)
    });
  };

  const { code } = state;

  return (
    <div className="home page">
      <Grid container relaxed>
        <Grid.Row>
          <Grid.Column width={16}>
            <p className="intro">Visualize the performance of your code</p>
            <p className="intro">.</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={8}>
          <CodeSection onCodeUpdate={updateCode} code={code} />
        </Grid.Column>
        <Grid.Column width={8}>
          <CodeChart data={data} />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Home;
