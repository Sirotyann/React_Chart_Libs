import React from 'react';
import { Chart, Lines, Transform } from 'rumble-charts';
/*
import {
  // main component
  Chart,
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  DropShadow, Gradient, helpers
} from 'rumble-charts';

*/
const AreaChart = () => {

  const series = [{
      data: [1, 3, 2]
  }, {
      data: [5, 11, 7]
  }, {
      data: [13, 19, 17]
  }];

  return (<Chart
    width={600} height={250} series={series} minY={0}
    scaleX={{paddingStart: 0, paddingEnd: 0}}
    scaleY={{paddingTop: 10}}>
    <Transform method='stack'>
      <Lines asAreas={true} />
    </Transform>
  </Chart>);
}

export default AreaChart;
