import React, { Component, useState } from 'react';

function Form({getSimulationConfig, getSimulationResult}) {
	const [ backgroundSet, setBackgroundSet ] = useState()
	const [ cars, setCars ] = useState()
	const [ response, setResponse] = useState()

	const handleBackgroundSetChange = (event) => {
		setBackgroundSet(event.target.value);
	}

	const handleNumberOfCarsChange = (event) => {
		setCars(event.target.value);
	}

	const handleSubmit = (event) => {
		alert(`${backgroundSet} ${cars}`)
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ houseId: 55, backgroundSetId: 1, numberOfCars: cars})
		};
		fetch('http://127.0.0.1:8000/simulationconfig/', requestOptions)
			.then(response => response.json())
			.then(data => setResponse(data));
		event.preventDefault()
		getSimulationConfig()
	}

	const handlRunSimulation = (event) =>{
		alert('run')
		getSimulationResult()
	}

		return (
			<><form onSubmit={handleSubmit}>
				<div>
					<label>Select the BackgroundSet: </label>
					<select value={backgroundSet} onChange={handleBackgroundSetChange}>
						<option value="No Electric Heating">No Electric Heating</option>
						<option value="Additional Electric Heating">Additional Electric Heating</option>
						<option value="Primary Electric Heating">Primary Electric Heating</option>
					</select>
				</div>
				<br />
				<div>
					<label>Enter the Number of Cars: </label>
					<input
						type="text"
						value={cars}
						onChange={handleNumberOfCarsChange} />
				</div>
				<p></p>
				<button type="submit">Add Configuration</button>

				<p></p>

			</form>

			<div onClick={handlRunSimulation}>
				<label>Run Simulation Configuration </label>
				<input value="Run Simulation" type="submit" />
			</div>
			{JSON.stringify(response, null, 2)}
			</>
		)
}

export default Form;