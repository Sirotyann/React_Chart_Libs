import React from 'react';
import Chartify from 'chartify';

let data = [
	{
		x_value: '20.11.2016',
		y_value: 5,
		title: '007 Spectre',
	},
];

let config = {
	theme: 'blue',
	width: 50,
	height: 10,
	box_size: 20,
	box_radius: 8,
	line: false,
	line_only: false,
	bordered: false,
};

class HelloChart extends React.Component {
	render() {
		return (
			<div>
				<Chartify data={data} container="films-container" config={config} />
			</div>
		);
	}
}

export default HelloChart;
