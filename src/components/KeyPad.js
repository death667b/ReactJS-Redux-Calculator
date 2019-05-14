import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import { 
  clearEnterBox,
  clearEverything,
  valueKeyPress,
  EqualKey,
  plusOperatorKey,
  minusOperatorKey,
  multiplyOperatorKey,
  divideOperatorKey,
  plusminusOperatorKey,
  squaredOperatorKey } from '../store/actions';

import Key from './Key';

const KeyPad = ({
  clearEnterBox, 
  clearEverything, 
  valueKeyPress, 
  EqualKey,
  plusOperatorKey,
  minusOperatorKey,
  multiplyOperatorKey,
  divideOperatorKey,
  plusminusOperatorKey,
  squaredOperatorKey
  }) => {
  return (
    <Grid.Row>
      <Grid centered columns={5}>
        <Grid.Row>
          <Key value='C'      whenClicked={clearEnterBox}/>
          <Key value='7'      whenClicked={valueKeyPress}/>
          <Key value='8'      whenClicked={valueKeyPress}/>
          <Key value='9'      whenClicked={valueKeyPress}/>
          <Key value='&#247;' whenClicked={divideOperatorKey}/> 
          {/* divide */}
        </Grid.Row>
        <Grid.Row>
          <Key value='AC'     whenClicked={clearEverything}/>
          <Key value='4'      whenClicked={valueKeyPress}/>
          <Key value='5'      whenClicked={valueKeyPress}/>
          <Key value='6'      whenClicked={valueKeyPress}/>
          <Key value='&#215;' whenClicked={multiplyOperatorKey}/>
          {/* multiply */}
        </Grid.Row>
        <Grid.Row>
          {/* x squared */}
          <Key value='x&#178;'whenClicked={squaredOperatorKey}/>
          <Key value='1'      whenClicked={valueKeyPress}/>
          <Key value='2'      whenClicked={valueKeyPress}/>
          <Key value='3'      whenClicked={valueKeyPress}/>
          <Key value='-'      whenClicked={minusOperatorKey}/>
        </Grid.Row>
        <Grid.Row>
          {/* plus/minus */}
          <Key value='&#8723;'whenClicked={plusminusOperatorKey}/>
          <Key value='0'      whenClicked={valueKeyPress}/>
          <Key value='.'      whenClicked={valueKeyPress}/>
          <Key value='='      whenClicked={EqualKey}/>
          <Key value='&#43;'  whenClicked={plusOperatorKey}/>
          {/* plus */}
        </Grid.Row>
      </Grid>
    </Grid.Row>
  )
}

export default connect(null, { 
  clearEnterBox, 
  clearEverything, 
  valueKeyPress,
  EqualKey,
  plusOperatorKey,
  minusOperatorKey,
  multiplyOperatorKey,
  divideOperatorKey,
  plusminusOperatorKey,
  squaredOperatorKey })(KeyPad);