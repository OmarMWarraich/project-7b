import React from 'react';
import CountDownTimer from './CountDownTimer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <CountDownTimer hours={1} minutes={20} seconds={40}/>
      </div>
    </div>
  );
}

export default App;
