import { 
  ADD_ARTICLE, 
  FOUND_BAD_WORD,
  DATA_LOADED,
  API_ERRORED,
  // Calculator
  PRESSED_CLEAR,
  PRESSED_ALL_CLEAR,
  PROCESS_VALUE_KEY,
  PROCESS_EQUAL_KEY,
  PROCESS_OPERATOR_KEY_PRESSED,
} from '../constants/action-types';

const emptyResultsArray = ['', '', '', '', ''];
const initialState = {
  articles: [],
  foundBadWord: false,
  oldTitle: '',
  remoteArticles: [],
  API_Error: '',
  // Calculator
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

  

  // Demo Stuff
  if (ADD_ARTICLE === action.type) {
    console.log('[REDUX] Added article: ', action.payload);
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      foundBadWord: false,
      oldTitle: ''
    });
  }

  if (FOUND_BAD_WORD === action.type) {
    console.log('[REDUX] Found bad word: ', action.payload);
    return Object.assign({}, state, {
      foundBadWord: true,
      oldTitle: action.payload.title
    })
  }

  if (DATA_LOADED === action.type) {
    console.log('[REDUX] Added remote article: ', action.payload);
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  if (API_ERRORED === action.type) {
    console.log('[REDUX] API Error reported: ', action.payload);
    return Object.assign({}, state, {
      API_Error: action.payload
    })
  }

  console.log('[REDUX] Uncaught Action: ', action);
  return state;
};

export default rootReducer;