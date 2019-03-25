import React from 'react';
// import { RadialChart } from 'react-vis';
import { Bar } from '@nivo/bar';
import { Pie } from '@nivo/pie';

class HelloChart extends React.Component {
	render() {
		return (
			<div>
				<div> ------------- </div>
				<Bar
					width={900}
					height={500}
					margin={{
						top: 60,
						right: 80,
						bottom: 60,
						left: 80,
					}}
					data={[
						{
							country: 'AD',
							dogs: 92,
							dogsColor: 'hsl(31, 70%, 50%)',
						},
						{
							country: 'AE',
							dogs: 65,
							dogsColor: 'hsl(307, 70%, 50%)',
						},
						{
							country: 'AF',
							dogs: 115,
							dogsColor: 'hsl(93, 70%, 50%)',
						},
						{
							country: 'AG',
							dogs: 192,
							dogsColor: 'hsl(332, 70%, 50%)',
						},
						{
							country: 'AI',
							dogs: 104,
							dogsColor: 'hsl(11, 70%, 50%)',
						},
						{
							country: 'AL',
							dogs: 99,
							dogsColor: 'hsl(158, 70%, 50%)',
						},
						{
							country: 'AM',
							dogs: 189,
							dogsColor: 'hsl(39, 70%, 50%)',
						},
					]}
					indexBy="country"
					keys={['dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut']}
					padding={0.2}
					labelTextColor="inherit:darker(1.4)"
					labelSkipWidth={16}
					labelSkipHeight={16}
				/>
				<Pie
					width={900}
					height={500}
					margin={{
						top: 80,
						right: 120,
						bottom: 80,
						left: 120,
					}}
					data={[
						{
							id: 'java',
							label: 'java',
							value: 557,
						},
						{
							id: 'elixir',
							label: 'elixir',
							value: 156,
						},
						{
							id: 'php',
							label: 'php',
							value: 311,
						},
						{
							id: 'hack',
							label: 'hack',
							value: 172,
						},
						{
							id: 'sass',
							label: 'sass',
							value: 20,
						},
						{
							id: 'c',
							label: 'c',
							value: 115,
						},
						{
							id: 'lisp',
							label: 'lisp',
							value: 27,
						},
						{
							id: 'rust',
							label: 'rust',
							value: 405,
						},
						{
							id: 'erlang',
							label: 'erlang',
							value: 561,
						},
					]}
					animate
				/>
			</div>
		);
	}
}

export default HelloChart;
