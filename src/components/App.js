import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	//need to mirror fish state to firebase -- wait for application (App componenet) to be on the page
	componentDidMount() {
		//application is loaded onto the page -- sync with the name of the store
		//refs in firebase are the refs to piece of data in the database
		// get name of the store

		//reinstate local storage

		const { params } = this.props.match;
		const localStorageRef = localStorage.getItem(params.storeId);

		if (localStorageRef) {
			console.log(JSON.parse(localStorageRef));
			this.setState({ order: JSON.parse(localStorageRef) });
		}

		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: 'fishes'
		});
	}

	componentDidUpdate() {
		//set the order for a specific store
		console.log('update');
		console.log(this.props.match.params.storeId);

		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
		localStorage.setItem('Fred', 'My Friend');
	}

	componentWillUnmount() {
		//when we leave, we can remove it, and not keep all references in memory
		base.removeBinding(this.ref);
	}

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

	updateFish = (key, updatedFish) => {
		//take copy of the current state
		const fishes = { ...this.state.fishes };
		//update the state
		fishes[key] = updatedFish;
		this.setState({ fishes });
	};

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	addToOrder = key => {
		//take a copy of state
		const order = { ...this.state.order };
		//either add to order or update the number
		//order[key] = order[key] + 1 || 1;
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
				<Inventory
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
					fishes={this.state.fishes}
					updateFish={this.updateFish}
				/>
				<Order fishes={this.state.fishes} order={this.state.order} />
			</div>
		);
	}
}

export default App;
