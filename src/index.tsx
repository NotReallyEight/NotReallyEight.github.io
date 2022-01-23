import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Introduction from "./components/Introduction"
import reportWebVitals from './reportWebVitals';
import App from './App';
import FAQSection from './components/FAQSection';

ReactDOM.render(
  <React.StrictMode>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
    <App />
    <Introduction />
    <FAQSection />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
