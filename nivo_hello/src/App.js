import React from 'react';
import HelloChart from './HelloChart';
import HelloLine from './HelloLine';
// import * as d3 from "d3";
import * as d3TimeFormat from 'd3-time-format';
import * as isNumber from 'lodash.isnumber';

class App extends React.Component {
	render() {

		// var d3TimeFormat = require('d3-time-format');
		console.log('d3TimeFormat', d3TimeFormat);
		console.log('isNumber', isNumber(10));
		return (
			<div id="app">
				<h1>App</h1>
				<HelloLine />
				<div style={{height: 300}} />
				<HelloChart />
			</div>
		);
	}
}

export default App;
