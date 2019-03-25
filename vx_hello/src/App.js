import React from 'react';
import HelloBarChart from './HelloBarChart';
import HelloAreaChart from './HelloAreaChart';
import HelloPieChart from './HelloPieChart';

class App extends React.Component {
	render() {
		return (
			<div id="app">
				<h1>App</h1>
				<HelloAreaChart width={600} height={400} margin={{left: 60, right: 60, top: 60, bottom: 60}} />
				<HelloBarChart width={600} height={400}/>
				<HelloPieChart  width={600} height={400} margin={{left: 60, right: 60, top: 60, bottom: 60}}/>
			</div>
		);
	}
}

export default App;
