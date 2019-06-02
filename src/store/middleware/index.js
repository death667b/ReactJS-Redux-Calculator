import { 
  VALUE_KEY_PRESSED,
  PROCESS_VALUE_KEY,
  STOPPED_DECIMAL,
  STOPPED_LEADING_ZERO,
  EQUAL_KEY,
  PROCESS_EQUAL_KEY,
  PLUS_OPERATOR_KEY_PRESSED,
  MINUS_OPERATOR_KEY_PRESSED,
  MULTIPLY_OPERATOR_KEY_PRESSED,
  DIVIDE_OPERATOR_KEY_PRESSED,
  PLUS_MINUS_OPERATOR_KEY_PRESSED,
  SQUARED_OPERATOR_KEY_PRESSED,
  PROCESS_OPERATOR_KEY_PRESSED } from '../constants/action-types';

export const processValueKey = ({ getState, dispatch }) => next => action => {
  if (VALUE_KEY_PRESSED === action.type) {
    const prevEnterBox = getState().currentValue;
    const newKey = action.payload;

    if (prevEnterBox === '0' && newKey === '0') 
      return dispatch( {type: STOPPED_LEADING_ZERO} );
    if (prevEnterBox === '0' && newKey === '.') 
      return dispatch( {type: PROCESS_VALUE_KEY, payload: prevEnterBox + newKey} );
    if (prevEnterBox === '0') 
      return dispatch( {type: PROCESS_VALUE_KEY, payload: newKey} );
    if (newKey === '.' && (prevEnterBox.indexOf('.') > 0) )
      return dispatch( {type: STOPPED_DECIMAL} );
    
    console.log(prevEnterBox + newKey)
    return dispatch( {type: PROCESS_VALUE_KEY, payload: prevEnterBox + newKey} );
  }

  return next(action);
}

const removeTrailingPeriod = input => (input.slice(-1) !== '.') ? input : input.slice(0,-1);
const formatEquation = ({currentValue, lastValue}) => {
  const cleanedCurrent = removeTrailingPeriod(currentValue);
  return (lastValue) ? lastValue + currentValue : currentValue;
}

export const processEqualKey = ({ getState, dispatch }) => next => action => {
  if (EQUAL_KEY === action.type) {
    const addPayload = action.payload || '';
    const mathString = formatEquation( getState() ) + addPayload;

    let evalMath = ''
    try {
      evalMath = eval(mathString);
    } catch (e) {
      evalMath = 'Error';
    }

    const returnString = mathString + ' = ' + evalMath;

    return dispatch( {type: PROCESS_EQUAL_KEY, payload: returnString});
  }

  return next(action);
}

export const processOperatorKey = ({ getState, dispatch }) => next => action => {
  if (PLUS_OPERATOR_KEY_PRESSED === action.type) {
    const mathString = formatEquation( getState() ) + ' + ';
    return dispatch( {type: PROCESS_OPERATOR_KEY_PRESSED, payload: mathString});
  }

  if (MINUS_OPERATOR_KEY_PRESSED === action.type) {
    const mathString = formatEquation( getState() ) + ' - ';
    return dispatch( {type: PROCESS_OPERATOR_KEY_PRESSED, payload: mathString});
  }

  if (MULTIPLY_OPERATOR_KEY_PRESSED === action.type) {
    const mathString = formatEquation( getState() ) + ' * ';
    return dispatch( {type: PROCESS_OPERATOR_KEY_PRESSED, payload: mathString});
  }

  if (DIVIDE_OPERATOR_KEY_PRESSED === action.type) {
    const mathString = formatEquation( getState() ) + ' / ';
    return dispatch( {type: PROCESS_OPERATOR_KEY_PRESSED, payload: mathString});
  }

  if (PLUS_MINUS_OPERATOR_KEY_PRESSED === action.type) {
    //const mathString = formatEquation( getState() ) + ' (*-1) ';
    return dispatch( {type: EQUAL_KEY, payload: ' *-1'});
  }

  if (SQUARED_OPERATOR_KEY_PRESSED === action.type) 
    dispatch( {type: EQUAL_KEY, payload: ' ** 2'});

  return next(action);
}