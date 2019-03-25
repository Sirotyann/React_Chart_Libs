import React from 'react';
import HelloChart from './HelloChart';
import HelloBarChart from './HelloBarChart';

class App extends React.Component {
	render() {
		return (
			<div id="app">
				<h1>App</h1>
				<HelloChart />
				<HelloBarChart />
			</div>
		);
	}
}

export default App;
