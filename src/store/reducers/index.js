import { 
  PRESSED_CLEAR,
  PRESSED_ALL_CLEAR,
  PROCESS_VALUE_KEY,
  PROCESS_EQUAL_KEY,
  PROCESS_OPERATOR_KEY_PRESSED,
} from '../constants/action-types';

const emptyResultsArray = ['', '', '', '', ''];
const initialState = {
  operator: '',
  currentValue: '0',
  lastValue: '',
  resultsArray: emptyResultsArray
};

const rootReducer = (state = initialState, action) =>{
  if (PRESSED_CLEAR === action.type) {
    console.log('[REDUX] Pressed Clear');
    return Object.assign({}, state, {
      operator: '',
      currentValue: '0',
      lastValue: '',
    })
  }

  if (PRESSED_ALL_CLEAR === action.type) {
    console.log('[REDUX] Pressed All Clear');
    return Object.assign({}, state, {
      operator: '',
      currentValue: '0',
      lastValue: '',
      resultsArray: emptyResultsArray
    })
  }

  if (PROCESS_VALUE_KEY === action.type) {
    console.log('[REDUX] Value Key Pressed: ', action.payload);
    return Object.assign({}, state, {
      currentValue: action.payload
    })
  }

  if (PROCESS_EQUAL_KEY === action.type) {
    console.log('[REDUX] Equal Key Pressed: ', action.payload);
    return Object.assign({}, state, {
      operator: '',
      currentValue: '0',
      lastValue: '',
      resultsArray: state.resultsArray.concat(action.payload)
    })
  }

  if (PROCESS_OPERATOR_KEY_PRESSED === action.type) {
    console.log('[REDUX] Plus Operator Key Pressed');
    return Object.assign({}, state, {
      operator: '+',
      lastValue: action.payload,
      currentValue: '0'
    })
  }

  console.log('[REDUX] Uncaught Action: ', action);
  return state;
};

export default rootReducer;