import React from 'react';
import './App.css';

import InputForm from './Components/InputForm';
import Header from './Components/Header'
import AboutUs from './Components/AboutUs'

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
