import React from 'react';
import { Line, ResponsiveLine } from '@nivo/line';

const data = [
	{
		date: '2019-03-01',
		hours: 20,
		cost: 200,
	},
	{
		date: '2019-03-02',
		hours: 80,
		cost: 350,
	},
	{
		date: '2019-03-03',
		hours: 120,
		cost: 500,
	},
	{
		date: '2019-03-04',
		hours: 180,
		cost: 850,
	},
	{
		date: '2019-03-05',
		hours: 260,
		cost: 1200,
	},
	{
		date: '2019-03-06',
		hours: 300,
		cost: 1550,
	},
	{
		date: '2019-03-07',
		hours: 330,
		cost: 1800,
	},
	{
		date: '2019-03-08',
		hours: 400,
		cost: 2250,
	},
	{
		date: '2019-03-09',
		hours: 3460,
		cost: 200,
	},
	{
		date: '2019-03-10',
		hours: 520,
		cost: 4250,
	},
];

const Chart = () => (
	<div>
		<div style={{ height: '10em', width: '10em' }}>
			<Line
				width={900}
				height={400}
				margin={{
					top: 20,
					right: 20,
					bottom: 60,
					left: 80,
				}}
				data={[
					{
						id: 'fake corp. A',
						color: '#547687',
						data: [
							{ x: '2019-03-01', y: 0.4 },
							{ x: '2019-03-11', y: 0.5 },
							{ x: '2019-03-21', y: 0.7 },
						],
					},
					{
						id: 'fake corp. B',
						color: '#7f98a5',
						data: [
							{ x: '2019-03-01', y: 0.5 },
							{ x: '2019-03-11', y: 0.6 },
							{ x: '2019-03-21', y: 0.8 },
						],
					},
					{
						id: 'fake corp. C',
						color: '#a7bac3',
						data: [
							{ x: '2019-03-01', y: 0.9 },
							{ x: '2019-03-11', y: 0.5 },
							{ x: '2019-03-21', y: 0.6 },
						],
					},
				]}
				animate
				enableArea
        enableDots={false}
        xScale={{type: 'time',format: '%Y-%m-%d',precision: 'day'}}
        yScale={{ type: 'linear', stacked: false }}
        axisBottom={{format: '%b %d'}}
				curve="monotoneX"
				colorBy={'color'}
				legends={[
					{
						anchor: 'bottom-right',
						direction: 'column',
						justify: false,
						translateX: 100,
						translateY: 0,
						itemsSpacing: 0,
						itemDirection: 'left-to-right',
						itemWidth: 80,
						itemHeight: 20,
						itemOpacity: 0.75,
						symbolSize: 12,
						symbolShape: 'circle',
						symbolBorderColor: 'rgba(0, 0, 0, .5)',
						effects: [
							{
								on: 'hover',
								style: {
									itemBackground: 'rgba(0, 0, 0, .03)',
									itemOpacity: 1,
								},
							},
						],
					},
				]}
				theme={{
					axis: {
						ticks: {
							line: {
								stroke: 'green',
							},
							text: {
								fill: 'red',
							},
						},
					},
					grid: {
						line: {
							stroke: 'pink',
							strokeWidth: 2,
							strokeDasharray: '4 4',
						},
					},
				}}
			/>
		</div>
	</div>
);

export default Chart;
