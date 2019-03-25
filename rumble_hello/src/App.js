import React from 'react';
import HelloBarChart from './HelloBarChart';
import HelloAreaChart from './HelloAreaChart';
import HelloPieChart from './HelloPieChart';

class App extends React.Component {
	render() {
		return (
			<div id="app">
				<h1>App</h1>
				<HelloAreaChart/>
				<HelloBarChart />
				<HelloPieChart />
			</div>
		);
	}
}

export default App;
