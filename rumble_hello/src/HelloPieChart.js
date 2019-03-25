
import React from 'react';
import { Chart, Pies, Transform } from 'rumble-charts';

const PieChart = ()=> {
  const series = [{data: [1, 2, 4]}];

  return (<div style={{fontFamily:'sans-serif',fontSize:'0.8em'}}>
  <Chart width={600} height={250} series={series}>
    <Transform method={['transpose', 'stack']}>
      <Pies combined={true} />
    </Transform>
  </Chart>
</div>);
}

export default PieChart;
