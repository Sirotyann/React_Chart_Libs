import React from 'react';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

class HelloChart extends React.Component {
	render() {
		return (
			<div>
				<PieChart data={[['Blueberry', 44], ['Strawberry', 23]]} />
			</div>
		);
	}
}

export default HelloChart;
