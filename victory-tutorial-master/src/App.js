import React from 'react';
import HelloChart from './HelloChart';
import HelloAreaChart from './HelloAreaChart';
import HelloPie from './HelloPie';

class App extends React.Component {
	render() {
		return (
			<div id="app">
				<h1>App</h1>
				<HelloChart/>
				<HelloAreaChart />
				<HelloPie />
			</div>
		);
	}
}

export default App;
