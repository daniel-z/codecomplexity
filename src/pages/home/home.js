import React from 'react';
import { Grid } from 'semantic-ui-react';
import CodeSection from './code-section/code-section'
import './home.css';

function Home() {
  return (
    <Grid.Row>
      <Grid.Column width={8}>
        <CodeSection />
      </Grid.Column>
      <Grid.Column width={4}>
        Graph
      </Grid.Column>
    </Grid.Row>

  );
}

export default Home;
