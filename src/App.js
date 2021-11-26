import React from 'react';
import logo from './Grid_Scout_Logo.png.png';
import './App.css';
import ResultsAPI from './components/ResultsAPI';
import ConfigAPI from './components/ConfigAPI';
import Form from './components/Form';
import SimulationChart from './components/SimulationChart';

function App() {
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Welcome to Grid-Scout!
         </p>
         </header>
         <p>
           <ResultsAPI />
         </p>
           <ConfigAPI />
         <p>
           <Form />
         </p>
         <p>
         <SimulationChart />
         {/* Encountering an error = "TypeError: Cannot read properties of undefined (reading 'map')" */}
         </p>
     </div>
   );
 }

export default App;