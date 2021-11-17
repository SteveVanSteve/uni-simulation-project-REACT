import React from 'react';
import './App.css'; 

function App() {
  const title = 'Welcome to Grid-Scout';

  return(
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>A grid simulation web service</p>
      </div>
    </div>
  );
}

export default App