import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <HomePage/>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);