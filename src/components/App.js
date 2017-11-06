import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component{
	constructor() {
		super();
		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null,
		}
	}

	fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }));
  }

	fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit: fruit }));
	}

	updateFilter = (event) => {
		this.setState({
			currentFilter: event.target.value
		})
	}


  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

	render() {
		return (
			<FruitBasket 
				fruit={this.state.fruit}
				filters={this.state.filters}
				currentFilter={this.state.currentFilter}
				updateFilterCallback={this.updateFilter}
			/>
		)
	}
}

