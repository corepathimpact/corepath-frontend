import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BackofficeProvider } from "./context/BackofficeContext";
import EligibilityBootstrap from "./context/EligibilityBootstrap";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BackofficeProvider>
      <EligibilityBootstrap>
        <App />
      </EligibilityBootstrap>
    </BackofficeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
