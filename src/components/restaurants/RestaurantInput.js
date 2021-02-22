import React, { Component } from "react";

class RestaurantInput extends Component {
	constructor() {
		super();
		this.state = {
			text: "",
		};
	}

	handleChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let restaurant = this.state.text;
		this.props.addRestaurant(restaurant);
		this.setState({
			text: "",
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChange}
						type="text"
						value={this.state.text}
					></input>
					<input type="submit" value="Submit"></input>
				</form>
			</div>
		);
	}
}

export default RestaurantInput;
