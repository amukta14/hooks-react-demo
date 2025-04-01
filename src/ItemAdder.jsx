import React, { useState, useMemo } from 'react';

function PriceCalculator({ items }) {
  const totalPrice = useMemo(() => {
    console.log('Calculating total price...'); // See how often this runs
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return <p>Total Price: ${totalPrice}</p>;
}

function ItemAdder() {
    const [myItems, setMyItems] = useState([{id:1, price:10}]);

    const addItem = () =>{
        const newArray = [...myItems, {id: Date.now(), price: Math.floor(Math.random()*20)+5}];
        setMyItems(newArray);
    }

    return(
        <div>
            <button onClick={addItem}>Add Item</button>
            <PriceCalculator items = {myItems}/>
        </div>
    )
}

export default ItemAdder;