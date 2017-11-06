import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, currentFilter, updateFilterCallback}) => {
    return (
      <div className="fruit-basket">
        <Filter
          filters={filters}
          handleChange={updateFilterCallback} />
        <FilteredFruitList
          fruit={fruit}
          filter={currentFilter} />
      </div>
    )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null,
}

export default FruitBasket;
