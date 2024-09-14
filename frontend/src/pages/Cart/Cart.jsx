import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/storeContext';
import { FaIndianRupeeSign } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"


const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalAmount, url } = useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
           
            return (
              <div key={item._id} className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt=""></img>
                <p>{item.name}</p>
                <p><FaIndianRupeeSign/>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p><FaIndianRupeeSign/> {Number(item.price) * Number(cartItems[item._id])}</p>
                <p>
                  <button onClick={() => removeFromCart(item._id)}>x</button>
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className='cart-total'>
          <h2>Item Total</h2>
        </div>
        <div className="cart-total-details">
        <p>SubTotal</p>
          <p><FaIndianRupeeSign/>{getTotalAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery-Fee</p>
          <p><FaIndianRupeeSign/>{getTotalAmount()===0?0:5}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total</p>
          <p><FaIndianRupeeSign/>{getTotalAmount()===0?0:getTotalAmount() + 5}</p>
        </div>
        <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
      </div>
      <div className="promocode">
        <div>
          <p>If you are lucky with promo code, apply here </p>
          <div className="cart-promocode-input">
            <input type='text' placeholder='promocode'/>
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
