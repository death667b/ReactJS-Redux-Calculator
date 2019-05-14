import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';

import Layout from './Layout';
import ResultsBox from './ResultsBox';
import EnterBox from './EnterBox';
import KeyPad from './KeyPad';

const Calculator = () => {

  return (
    <Layout>
      <Header as='h2'>Calculator</Header>
      <Grid verticalAlign='middle' centered columns={2}>
        <Segment secondary>
          <Grid columns={1}>
            <ResultsBox />
            <EnterBox />
            <KeyPad />
          </Grid>
        </Segment>
      </Grid>
    </Layout>
  );
}

export default Calculator;