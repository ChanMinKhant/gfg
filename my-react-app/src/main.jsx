import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { msalInstance } from './msalInstance'; // Import from the new file

ReactDOM.render(
  <React.StrictMode>
    <App msalInstance={msalInstance} />
  </React.StrictMode>,
  document.getElementById('root')
);
