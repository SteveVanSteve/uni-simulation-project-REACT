import React, { Component, useState } from 'react';

function Form({getSimulationConfig, getSimulationResult}) {
	const [ backgroundSets, setBackgroundSets ] = useState()
	const [ loadedBackgroundSets, setLoadedBackgroundSets] = useState(false)
	const [ backgroundSet, setBackgroundSet ] = useState()
	const [ cars, setCars ] = usetState()
	const [ houseId, setHouseId ] = usetState()
	const [ response, setResponse] = useState()

	useEffect(() => {useEffect(() => {
		if (!loadedBackgroundSets){
			fetch('http://127.0.0.1:8000/backgroundsets/')
			.then(data => {
				setBackgroundSets(data.results)
				setLoadedBackgroundSets(true)
				setBackgroundSet(data.result[0].backgroundSetId)
			});
		}
	});

	const handleBackgroundSetChange
}



//////////////////////
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