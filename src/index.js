import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import 'semantic-ui-css/semantic.min.css'

const rootEl = document.getElementById('app');

render(<App />, rootEl);

if (module.hot) {
  module.hot.accept();
}