import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Input } from 'semantic-ui-react';

import {enterBoxStyle} from './EnterBox.css';

const mapStateToProps = state => {
  return { 
    resultsArray: state.resultsArray.slice(-5)
  };
};

const ResultsBox = ({resultsArray}) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Segment>
          {resultsArray.map( (elem, idx) => 
            (<Input transparent fluid className={enterBoxStyle} value={elem} key={idx}/>))}
        </Segment>
      </Grid.Column>
    </Grid.Row>
  )
}

export default connect(mapStateToProps)(ResultsBox);