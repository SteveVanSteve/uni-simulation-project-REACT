import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			backgroundSet: 'electric heating',
      cars: ''
		}
	}

	handleBackgroundSetChange = event => {
		this.setState({
			backgroundSet: event.target.value
		})
	}

	handleNumberOfCarsChange = event => {
		this.setState({
			cars: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.backgroundSet} ${this.state.cars}`)
		event.preventDefault()
	}

	render() {
		const { backgroundSet, cars } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Select the BackgroundSet: </label>
					<select value={backgroundSet} onChange={this.handleBackgroundSetChange}>
						<option value="No Electric Heating">No Electric Heating</option>
						<option value="Additional Electric Heating">Additional Electric Heating</option>
						<option value="Primary Electric Heating">Primary Electric Heating</option>
					</select>
				</div>
        <br/>
        <div>
					<label>Enter the Number of Cars: </label>
					<input
						type="text"
						value={cars}
						onChange={this.handleNumberOfCarsChange}
					/>
				</div>
        <p></p>
				<button type="submit">Submit Configuration</button>

        <p></p>
          <div>
             <label>Run Simulation Configuration</label>
              <input value="Run Simulation" type="submit" />
          </div>
          <p></p>
          <div>
             <label>Get Simulation Results</label>
             <input type="submit" value="Get"/>
          </div>

			</form>
		)
	}
}

export default Form;