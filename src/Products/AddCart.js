import React, { useEffect, useState } from 'react';
import NewBar from '../components/NewBar';
import './AddCart.css';

const AddCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <div>
      <div className="head"><NewBar /></div>
      <h2 className='section-heading'>Cart View</h2>
      <div className='cart-body'>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              {item && (
                <>
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">&#8377; {item.price}</p>
                    <div className="actionbuttons">
                      <button className="cartbutton" onClick={() => handleRemoveFromCart(index)}>Remove</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <p>Total Price: &#8377; {calculateTotalPrice()}</p>
            <button className="confirm-order">Confirm Order</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCart;
