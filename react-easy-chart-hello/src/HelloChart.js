import React from 'react';
import { AreaChart } from 'react-easy-chart';

class HelloChart extends React.Component {
	render() {
		return (
			<div>
				<AreaChart
    xType={'time'}
    axes
    grid
    verticalGrid
    interpolate={'cardinal'}
    width={750}
    height={250}
    data={[
      [
        { x: '1-Jan-15', y: 20 },
        { x: '1-Feb-15', y: 10 },
        { x: '1-Mar-15', y: 33 },
        { x: '1-Apr-15', y: 45 },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]}
  />
			</div>
		);
	}
}

export default HelloChart;
