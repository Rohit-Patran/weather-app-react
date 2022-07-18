import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const ROOT = ReactDOM.createRoot(document.querySelector('#root'));
ROOT.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
