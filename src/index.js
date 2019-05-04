import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

const rootEl = document.getElementById('root');

ReactDom.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept();
}