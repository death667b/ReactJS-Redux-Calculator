import React from 'react';
import { connect } from 'react-redux';
import { Grid, Input } from 'semantic-ui-react';

import {enterBoxStyle} from './EnterBox.css';

const mapStateToProps = state => {
  const currentValue = state.currentValue;
  const operator = state.operator;
  const lastValue = state.lastValue;
  const displayValue = (operator) ? lastValue + currentValue : currentValue;
  return { 
    currentValue: displayValue
  };
};

const EnterBox = ({currentValue}) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Input 
          fluid
          className={enterBoxStyle}
          value={currentValue}
        />
      </Grid.Column>
    </Grid.Row>
  )
}

export default connect(mapStateToProps)(EnterBox);