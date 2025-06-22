// ProductList.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const ProductList = ({ onContinueShopping }) => {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  
  const plantsArray = [
    {
      name: "Lavender",
      image: "lavender.jpg",
      description: "Fragrant purple flowers with calming properties",
      cost: "$12.99",
      category: "Aromatic"
    },
    // Add more plant objects
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      ...plant,
      quantity: 1
    }));
    setAddedToCart({...addedToCart, [plant.name]: true});
  };

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      <div className="product-grid">
        {plantsArray.map((plant) => (
          <div key={plant.name} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p>{plant.cost}</p>
            <button 
              onClick={() => handleAddToCart(plant)}
              disabled={addedToCart[plant.name]}
              className={addedToCart[plant.name] ? 'added' : ''}
            >
              {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;