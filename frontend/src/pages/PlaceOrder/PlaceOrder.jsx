import React, { useContext,  useEffect,  useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './PlaceOrder.css';
import { StoreContext } from '../../context/storeContext';
import { FaIndianRupeeSign } from "react-icons/fa6";
import axios from 'axios';

const PlaceOrder = () => {
  

  const {getTotalAmount,token,food_list,cartItems,url} =useContext (StoreContext) 
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    address:"",
    phone:"",
    postalCode:"",
    city:"",
    state:"",

})
const onChangeHandler= (event)=>{
  const name=event.target.name;
  const value = event.target.value;
  setData(data=>({...data,[name]:value}))

}
const placeOrder= async(event)=>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if (cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"]= cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalAmount()+5,

    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
      const{session_url}=response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error")
    }
}
const navigate= useNavigate();

useEffect(()=>{
  if(!token){
    navigate("/cart")
  }else if(getTotalAmount()===0){
    navigate('/cart')
  }
},[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery-Info</p>
        <div className="multi-fields">
          <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First-Name" />
          <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last-name" />
        </div>
        <input required name="email" onChange={onChangeHandler} value={data.email}type="text" placeholder="E-mail" />
        <input required name="address" onChange={onChangeHandler} value={data.address}type="text" placeholder="Address" />
        <div className="multi-fields">
          <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
          <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input required name="postalCode" onChange={onChangeHandler} value={data.postalCode} type="text" placeholder="Postal-code" />
        </div>
        <input required name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone" />
      </div>

      <div className="placeorder-right">
        <div className="cart-total">
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
        <button type="submit">
          PROCEED TO PAYMENT
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
