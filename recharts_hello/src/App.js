import React from 'react';
import AreaChart from './AreaChart';
import BarChart from './BarChart';

class App extends React.Component {
	render() {
		return (
			<div id="app">
				<h1>App</h1>
				<AreaChart />
				<BarChart/>
			</div>
		);
	}
}

export default App;
