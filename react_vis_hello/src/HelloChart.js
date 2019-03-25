import React from 'react';
import {
	RadialChart,
	XYPlot,
	VerticalGridLines,
	HorizontalGridLines,
	XAxis,
	YAxis,
	AreaSeries,
	VerticalBarSeries,
} from 'react-vis';

class HelloChart extends React.Component {
	render() {
		const myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }];
		return (
			<div style={{margin: '50px'}}>
				<div>Area:</div>
				<XYPlot width={600} height={300}>
					<VerticalGridLines />
					<HorizontalGridLines />
					<XAxis />
					<YAxis />
					<AreaSeries
						className="area-series-example"
						curve="curveNatural"
						data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
					/>
				</XYPlot>

				<div>Radial:</div>
				<RadialChart data={myData} width={300} height={300} />

				<div>Bar:</div>
				<XYPlot width={600} height={300}>
					<VerticalBarSeries
						data={[
							{
								x: 0,
								y: 10,
							},
							{
								x: 1,
								y: 11.364925706363792,
							},
							{
								x: 2,
								y: 12.050138680915307,
							},
							{
								x: 3,
								y: 11.228291122204034,
							},
							{
								x: 4,
								y: 13.37625010388558,
							},
							{
								x: 5,
								y: 14.724492973333573,
							},
							{
								x: 6,
								y: 16.107635009782967,
							},
							{
								x: 7,
								y: 12.658079672587853,
							},
							{
								x: 8,
								y: 15.02949300068031,
							},
						]}
						style={{}}
					/>
					<VerticalBarSeries
						data={[
							{
								x: 0,
								y: 10,
							},
							{
								x: 1,
								y: 10.926025167152144,
							},
							{
								x: 2,
								y: 10.00897798910295,
							},
							{
								x: 3,
								y: 10.565294443364577,
							},
							{
								x: 4,
								y: 11.452451731240082,
							},
							{
								x: 5,
								y: 12.300415639032892,
							},
							{
								x: 6,
								y: 13.390388622056575,
							},
							{
								x: 7,
								y: 13.139467021648654,
							},
							{
								x: 8,
								y: 14.705000688344937,
							},
						]}
						style={{}}
					/>
					<VerticalBarSeries
						data={[
							{
								x: 0,
								y: 10,
							},
							{
								x: 1,
								y: 9.92724947595171,
							},
							{
								x: 2,
								y: 8.244411650512205,
							},
							{
								x: 3,
								y: 8.456497824177,
							},
							{
								x: 4,
								y: 6.675661723760496,
							},
							{
								x: 5,
								y: 6.749303882424873,
							},
							{
								x: 6,
								y: 6.12819032900463,
							},
							{
								x: 7,
								y: 6.023711149770779,
							},
							{
								x: 8,
								y: 6.6553530610503895,
							},
						]}
						style={{}}
					/>
				</XYPlot>
			</div>
		);
	}
}

export default HelloChart;
