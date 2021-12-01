import React, { useEffect, useState } from 'react';

function Form({getSimulationConfig, getSimulationResult}) {
	const [ backgroundSets, setBackgroundSets ] = useState()
	const [ loadedBackgroundSets, setLoadedBackgroundSets ] = useState(false)
	const [ backgroundSet, setBackgroundSet ] = useState()
	const [ cars, setCars ] = useState()
	const [ houseId, setHouseId ] = useState()
	const [ response, setResponse] = useState()

	useEffect(() => {
		if (!loadedBackgroundSets){
			fetch('http://127.0.0.1:8000/backgroundsets/')
			.then(response => response.json())
			.then(data => {
				setBackgroundSets(data.results)
				setLoadedBackgroundSets(true)
				setBackgroundSet(data.results[0].backgroundSetId)
			});
		}
	});

	const handleBackgroundSetChange = (event) => {
		setBackgroundSet(event.target.value);
	}

	const handleNumberOfCarsChange = (event) => {
		setCars(event.target.value);
	}

	const handleHouseIdChange = (event) => {
		setHouseId(event.target.value);
	}

	const handleSubmit = (event) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ houseId: houseId, backgroundSetId: backgroundSet, numberOfCars: cars})
		};
		fetch('http://127.0.0.1:8000/simulationconfig/', requestOptions)
			.then(response => response.json())
			.then(data => setResponse(data));
		event.preventDefault()
		// Update list of simulation configs in app
		getSimulationConfig()
	}

	const handleRunSimulation = (event) =>{
		getSimulationResult()
	}

	return (
			<><form onSubmit={handleSubmit}>
				<div>
					<label>Select the BackgroundSet: </label>
					<select value={backgroundSet} onChange={handleBackgroundSetChange}>
						{ loadedBackgroundSets &&
						backgroundSets.map((background) => <option value={background.backgroundSetId}>{background.backgroundSetName}</option>)}
					</select>
				</div>
				<br />
				<div>
					<label>Enter the Number of Cars: </label>
					<input
						type="text"
						value={cars}
						onChange={handleNumberOfCarsChange} />
					<br />
					<label>Enter the House Id: </label>
					<input
						type="text"
						value={houseId}
						onChange={handleHouseIdChange} />	
				</div>
				<p></p>
				<button type="submit">Submit and Add this Configuration</button>

				<p></p>

			</form>

			<div onClick={handleRunSimulation}>
				<label>Click 'Show Results' to see the effect of this configuration displayed in the graph below </label>
				<p></p>
				<input value="Show Results" type="submit" />
				<p></p>
			</div>
			{JSON.stringify(response, null, 2)}
			</>
		)
}

export default Form;