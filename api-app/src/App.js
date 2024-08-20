
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RandomGraphApi from './components/RandomGraphApi';
import NewsletterSubscription from './components/NewsletterSubscription';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RandomGraphApi />} />
        <Route path="/newsletter" element={<NewsletterSubscription />} />
      </Routes>
    </Router>
  );
};

export default App;
