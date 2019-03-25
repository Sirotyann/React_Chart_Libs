
 import React from 'react';
 import { BarChart } from 'react-easy-chart';

 class HelloBarChart extends React.Component {
 	render() {
 		return (
 			<div>
        <BarChart
          axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
           axes
           grid
           colorBars
           height={250}
           width={650}
    data={[
     {
       x: 'A',
       y: 46
     },
     {
       x: 'B',
       y: 26
     },
     {
       x: 'C',
       y: 19
     },
     {
       x: 'D',
       y: 53
     }
    ]}
  />

 			</div>
 		);
 	}
 }

 export default HelloBarChart;
