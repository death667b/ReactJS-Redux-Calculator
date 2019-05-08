import { ADD_ARTICLE } from '../constants/action-types';

export function addArticle(payload) {
  console.log('[REDUX] Added article: ', payload);
  return { type: ADD_ARTICLE, payload };
}
