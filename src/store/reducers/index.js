import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) =>{
  if (ADD_ARTICLE === action.type) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  return state;
};

export default rootReducer;