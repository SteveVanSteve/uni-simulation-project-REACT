import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';


function SimulationChart({simulationResult}) {

  const labels = [0.00, 1.00, 2.00, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00,
    12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 22.00, 23.00]

  const emptyData = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]  

  const [resultDataSets, setResultDataSets] = useState([])

  useEffect(() => {
    if (simulationResult) {
      setResultDataSets(currentData => [])
      for (var house in simulationResult.data) {
        addHouseToGraph(simulationResult.data[house])
      }
    }
  }, simulationResult)

  const addHouseToGraph = (house) => {
    const dataSet = {
      label: 'Background Current of house: '+house.houseId +' - ' +house.numberOfCars +' car(s) loaded onto background set '+ house.backgroundSetId,
      data: getData(house),
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.5,
      options: {
        scales: {
          yAxes: {
            title: {
              display: true,
              text: 'Current (Amps)',
              font: {
                size: 15
              }
            },
            ticks: {
              precision: 0
            }
          },
          xAxes: {
            title: {
              display: true,
              text: 'Time (24 hours)',
              font: {
                size: 15
              }
            },
            ticks: {
              precision: 0
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      }
    }
    // Add new dataset to list of datasets
    setResultDataSets(currentData => [...currentData, dataSet])

  }

  const getData = (house) =>{
    if (house){
      return house.simulation.map(item => item.power)
    }
     return emptyData 
    
  }
  
  const data = {
    labels: labels,
    datasets: resultDataSets
    
  };
  
  return <div>
    <h1>Simulation Result Chart</h1>
    <div style={{ width: "400px"}}></div>
    <Line data={data}/>
  </div>
}

export default SimulationChart;