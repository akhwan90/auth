import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const rootElement = document.getElementById("root");
//id is given as app

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);