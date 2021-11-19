import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

const Chart = () => {
  const [chartData, setChartData] = useState({})

  const chart = () => {
    setChartData({
      labels: [0.00, 1.00, 2.00, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00,
        12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 22.00, 23.00],
      datasets: [
        {
          label: 'Total Power from house loaded onto Low Voltage Grid',
          data: [],
          fill: true,
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)'
          ],
          borderWidth: 4
        }
      ]
    })
  }
  useEffect(() => {
    chart()
  }, [])
  return(
    <div className="App">
      <h1>Chart</h1>
      <div>
        <Line data={chartData} coptions={{
          responsive: true,
          title: {text: 'Simulation Results', display: true},
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true
                },
                gridLines: {
                  display: true
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  display: true
                }
              }
            ]
          }
        }}/>
      </div>
    </div>
  )
}

export default Chart