// src/App.js
import React from 'react';
import HomePage from './components/Homepage';
import {Route,Routes} from "react-router-dom";
import Layout from './components/Layout';
import News from './components/News';
import Media from './components/Media.js';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/research" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/media" element={<Media/>} />
        <Route path="/people" element={<HomePage />} />
        <Route path="/publications" element={<HomePage />} />
        <Route path="/opportunities" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
