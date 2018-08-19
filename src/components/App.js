import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	addFish = fish => {
		//take a copy of exiting state with an object spread
		const fishes = { ...this.state.fishes };
		//add new fish with a timestamp unique key
		fishes[`fish${Date.now()}`] = fish;
		//set new fishes object to state
		this.setState({
			fishes: fishes
		});
	};

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	addToOrder = key => {
		//take a copy of state
		const order = { ...this.state.order };
		//either add to order or update the number
		order[key] = order[key] + 1 || 1;
		//call set state to update state object
		this.setState({ order });
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
						))}
					</ul>
				</div>
				<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
				<Order />
			</div>
		);
	}
}

export default App;
