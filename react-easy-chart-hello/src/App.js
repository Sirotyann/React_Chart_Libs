import React from 'react';
import HelloChart from './HelloChart';
import BarChart from './BarChart';

class App extends React.Component {
	render() {
		return (
			<div id="app">
				<h1>App</h1>
				<HelloChart />
				<BarChart />
			</div>
		);
	}
}

export default App;
