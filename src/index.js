import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

// wrap entire App in BrowserRouter component to allow browser side routing
const BrowserRoot = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

// set up root component in the new style with createRoot for React 18
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRoot />
  </React.StrictMode>
);
