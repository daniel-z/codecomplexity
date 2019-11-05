import React from 'react';
import './home.css';
import { Grid } from 'semantic-ui-react';

function Home() {
  return (
    <Grid.Row>
      <Grid.Column width={6}>
        Code
      </Grid.Column>
      <Grid.Column width={6}>
        Graph
      </Grid.Column>
    </Grid.Row>

  );
}

export default Home;
