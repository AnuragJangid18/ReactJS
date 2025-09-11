import React from 'react';
import ReactDOM from 'react-dom/client'; // `react-dom` was updated in React 18, so use `react-dom/client`
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define route using element */}
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
