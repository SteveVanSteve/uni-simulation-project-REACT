import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    //Make the API or AJAX call here
    this.setState({
      chartData:{
        labels: ["House 1", "House 2", "House 3", "House 4", "BIG House 5"],
        datasets: [
            {
                label:'Simulation Results of charging scenarios (TEST)', 
                data: [
                    21.116, 
                    48.343,
                    32.100,
                    25.11,
                    54.211
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6',
                    'rgba(54, 162, 235, 0.6',
                    'rgba(255, 206, 86, 0.6',
                    'rgba(100, 182, 192, 0.6',
                    'rgba(153, 102, 255, 0.6'
                ]
            }
        ]
    }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo"
          alt="logo" />
          <h2>Hello! Welcome to the Grid-Scout Web Service</h2>
        </div>
        <Chart chartData={this.state.chartData} legendPosition="bottom" />
      </div>
    );
  }
}

export default App