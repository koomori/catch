import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	storeNameInput = React.createRef();
	goToStore = event => {
		event.preventDefault();
		const storeName = this.storeNameInput.value.value;
		this.props.history.push(`/store/${storeName}`);
	};

	render() {
		return (
			<form action="" className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input
					ref={this.storeNameInput}
					type="text"
					required
					placeholder="Store Name"
					defaultValue={getFunName()}
				/>
				<button type="submit">Visit Store Picker </button>
			</form>
		);
	}
}

export default StorePicker;
