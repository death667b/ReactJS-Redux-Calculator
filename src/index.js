import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store/index';

window.testStore = store;

const rootEl = document.getElementById('root');
const rootComponent = (
  <Provider store={store}>
      <App />
    </Provider>
);

ReactDom.render( rootComponent, rootEl);

if (module.hot) {
  module.hot.accept();
}