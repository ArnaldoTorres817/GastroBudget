import React from 'react';
import './App.css';

import InputForm from './components/InputForm';
import Header from './components/Header'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Pick your food based on your budget.</h2>
        <InputForm />
        <section>
          <AboutUs />
        </section>
      </main>
    </div>
  );
}

export default App;
