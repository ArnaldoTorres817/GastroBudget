import React from 'react';

import Header from '../header/Header'

import MainContent from '../maincontent/MainContent'

import Footer from '../footer/Footer'
import './App.css'



function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer/>
    </div>
  );
}

export default App;
