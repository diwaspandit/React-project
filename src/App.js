// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Your content goes here */}
      </main>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
