import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './routers/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from './routers/AboutMe';
import { MantineProvider } from '@mantine/core';

ReactDOM.render(
  <MantineProvider theme={{ colorScheme: "dark", fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<React.StrictMode>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
    <Home />
  </React.StrictMode>} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
  </MantineProvider>,
  document.getElementById('root')
);
