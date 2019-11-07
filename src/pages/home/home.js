import React from "react";
import { Grid } from "semantic-ui-react";
import CodeSection from "./code-section/code-section";
import CodeChart from "./code-chart/code-chart";
import "./home.scss";

function Home() {
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
          <CodeSection />
        </Grid.Column>
        <Grid.Column width={8}>
          <CodeChart />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Home;
