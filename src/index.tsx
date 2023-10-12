import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navigation } from './components/Navigation';
import Footer from './components/Footer/Footer';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navigation/>
    <App />
    <Footer/>
  </React.StrictMode>
);

