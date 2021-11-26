import React from 'react';
import { Line } from 'react-chartjs-2';

// Encountering an error = "TypeError: Cannot read properties of undefined (reading 'map')"
// when trying to build my graph - I'm not sure why its causing this error/bug

const SimulationChart = () => {
  return (
    <div>
      <Line 
      data={{
        labels: [],
      }}
      height={400}
      width={600}
      />
    </div>
  )
}

export default SimulationChart;
