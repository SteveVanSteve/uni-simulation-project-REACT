import React, { useEffect, useState } from 'react';
import logo from './Grid_Scout_Logo.png.png';
import './App.css';
import Form from './components/Form';
import SimulationChart from './components/SimulationChart';

function App() {

  const [loading, setLoading] =useState(false)
  const[simulationConfig, setSimulationConfig] = useState()
  const [simulationResult, setSimulationResult] = useState()


  useEffect(() => {
    if (!simulationConfig){
    getSimulationConfig()}
	});

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
          <Form getSimulationConfig={getSimulationConfig} getSimulationResult={getSimulationResult} />
        </p>
        {JSON.stringify(simulationConfig, null, 2)}
        <p>
        <SimulationChart simulationResult={simulationResult} />
        </p>
    </div>
  );
}

export default App;