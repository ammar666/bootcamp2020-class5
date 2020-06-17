import React, { useState } from 'react';
import Parent from './parent';
import './App.css';
import CounterContext from './CounterContext';

function App() {
  let countState = useState(1)
  return (
    <CounterContext.Provider value = {countState}>
      <div className = {`box`} >
        <h3>Hello World</h3>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
