import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Introduction from "./components/Introduction"
import Home from './Home';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from './routers/about-me';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<React.StrictMode>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
    <Home />
    <Introduction />
    <FAQSection />
    <Footer />
  </React.StrictMode>} />
      <Route path="about-me" element={<AboutMe />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
