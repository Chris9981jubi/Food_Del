import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import './Order.css';


const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };
  const statusHandler = async(event, orderId)=>{
    const response = await axios.post(url+ "/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }

  }

  useEffect(() => {
    fetchAllOrders();
  }, [url]);

  return (
    <div>
      <div className="order-add">
        <h3>Order Page</h3>
        <div className="order-list">
          {orders.map((order, index) => (
            <div key={index} className="order-item">
              <img src={assets.Parcel} alt='Order Icon' />
              <div>
                <p className='order-item-food'>
                  {order.items.map((item, itemIndex) => (
                    `${item.name}x${item.quantity}${itemIndex === order.items.length - 1 ? '' : ','}`
                  ))}
                </p>
                <p className="order-item-name">
                  {order.address.firstName+ " " +order.address.lastName}
                </p>
                <div className='order-item-address'>
                  <p>{order.address.city + ","}</p>
                  <p>{order.address.address+", "+order.address.state + ", "+ order.address.postalCode}</p>
                  
                </div>
                <p className='order-item-phone'>
                  {order.address.phone}
                </p>
              </div>
              <p>Items: {order.items.length}</p>
              <p>Amount: ₹{order.amount}</p>
              <select onChange={(event)=>statusHandler(event, order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
