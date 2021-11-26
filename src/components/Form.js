import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('The backgroundSet selected is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select the Background Setting:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="No Electric Heating">No Electric Heating</option>
            <option value="Additional Electric Heating">Additional Electric Heating</option>
            <option value="Primary Electric Heating">Primary Electric Heating</option>
          </select>
        </label>
        <input type="submit" value="Select" />
        <div>
        <p></p>
        <label>Enter the number of Electric Cars:
          <input type="text" />
        </label>
        <input type="submit" value="Enter"/>
        </div>
          <div>
          <p></p>
          <label>
            Add this Configuration
          </label>
          <input type="submit" value="Add"/>
          </div>
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
    );
  }
}

export default Form;

