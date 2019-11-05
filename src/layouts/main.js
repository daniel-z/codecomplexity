import React from 'react';
import './main.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Grid } from 'semantic-ui-react';

function Main (props) {
  return (

  <Grid>
    <Grid.Row>
      <Grid.Column width={12}>
        <Header />
      </Grid.Column>
    </Grid.Row>

    { props.children }

    <Grid.Row>
      <Grid.Column width={12}>
        <Footer />
      </Grid.Column>
    </Grid.Row>
  </Grid>

  );
}

export default Main;
