import React, { useReducer } from 'react';

const initialState = { items: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { items: state.items.filter((item) => item.id !== action.payload.id) };
    default:
      return state;
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = () => {
    const newItem = { id: Date.now(), name: `Item ${Date.now()}` };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;