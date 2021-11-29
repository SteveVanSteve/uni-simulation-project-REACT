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


  const getSimulationConfig = () => {
		setLoading(true);
		const apiUrl = `http://127.0.0.1:8000/simulationconfig`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((simulationConfig) => {
        setLoading(false)
        setSimulationConfig(simulationConfig)
			});
  }

  const getSimulationResult = () => {
		setLoading(true);
    const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(simulationConfig.results)
		};

		const apiUrl = `http://127.0.0.1:8000/simulationresult/`;
		fetch(apiUrl, requestOptions)
			.then((data) => data.json())
			.then((simulationResult) => {
        setLoading(false)
        console.log("result")
        console.log(simulationResult)
        setSimulationResult(simulationResult)
			})
      .catch((error) => {
        console.log(error)
      });;
  }


return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1>
           Welcome to Grid-Scout!
         </h1>
         <p>Helping to simulate we will power our future</p>
         </header>
         <p>
           <Form getSimulationConfig={getSimulationConfig} getSimulationResult={getSimulationResult} getSimulationBackgroundPower />
         </p>
         <p>
          <SimulationChart simulationResult={simulationResult} />
         </p>
     </div>
   );
 }

export default App;