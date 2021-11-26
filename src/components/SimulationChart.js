import { Line } from 'react-chartjs-2';

const data = {
  labels: [0.00, 1.00, 2.00, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00,
    12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 22.00, 23.00],
  datasets: [{
    label: 'Total Power from house loaded onto Low Voltage Grid',
    data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    fill: true,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.4,
    options: {
      scales: {
        yAxes: {
          title: {
            display: true,
            text: "Power",
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
            text: "Time (24 hours)",
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
  }],
  
};

function SimulationChart() {
  return <div>
    <h1>Simulation Result Chart</h1>
    <div style={{ width: "400px"}}></div>
    <Line data={data}/>
  </div>
}

export default SimulationChart;