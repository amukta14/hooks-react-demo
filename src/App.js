import React from 'react';
import VoteCounter from './VoteCounter'; // Import your components
import WeatherDisplay from './WeatherDisplay';
import ShoppingCart from './ShoppingCart';
import ItemAdder from './ItemAdder';
import ListManager from './ListManager';

function App() {
  return (
    <div>
      <h1>React Hooks Examples</h1>
      <section>
        <h2>Vote Counter (useState)</h2>
        <VoteCounter />
      </section>

      <section>
        <h2>Weather Display (useEffect)</h2>
        <WeatherDisplay />
      </section>

      <section>
        <h2>Shopping Cart (useReducer)</h2>
        <ShoppingCart />
      </section>

      <section>
        <h2>Price Calculator (useMemo)</h2>
        <ItemAdder />
      </section>

      <section>
        <h2>Filtered List (useCallback)</h2>
        <ListManager />
      </section>

    </div>
  );
}

export default App;