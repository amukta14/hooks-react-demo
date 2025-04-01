import React, { useState, useCallback } from 'react';

function FilteredList({ items, onFilter }) {
  return (
    <div>
      <button onClick={() => onFilter('even')}>Show Even</button>
      <button onClick={() => onFilter('odd')}>Show Odd</button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ListManager() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [filteredNumbers, setFilteredNumbers] = useState(numbers);

  const filterList = useCallback((type) => {
    if (type === 'even') {
      setFilteredNumbers(numbers.filter((num) => num % 2 === 0));
    } else {
      setFilteredNumbers(numbers.filter((num) => num % 2 !== 0));
    }
  }, [numbers]);

  return (
    <div>
      <FilteredList items={filteredNumbers} onFilter={filterList} />
    </div>
  );
}

export default ListManager;