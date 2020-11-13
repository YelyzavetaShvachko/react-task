import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from '../src/components/App';

ReactDOM.hydrate(
  <App Router={BrowserRouter} />,
  document.getElementById('app'),
);