import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './index.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="md"
>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeProvider>
);
