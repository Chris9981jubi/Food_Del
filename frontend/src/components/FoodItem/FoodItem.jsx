import React, { useContext } from 'react';
import "./FoodItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../context/storeContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-container'>
                <img className='food-item-image' src={url+"/images/"+image} alt={name} />
                {!cartItems[id] ? (
    <FontAwesomeIcon
        className='add'
        icon={faPlus}
        onClick={() => addToCart(id)}
    />
) : (
    <div className='food-item-counter'>
        <button className='decrement' onClick={() => removeFromCart(id)}>-</button>
        <span className='item-count'>{cartItems[id]}</span>
        <button className='increment' onClick={() => addToCart(id)}>+</button>
    </div>
)}

            </div>
            <div className='food-item-info'>
                <div className='food-item-name'>
                    <p>{name}</p>
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>₹{price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
