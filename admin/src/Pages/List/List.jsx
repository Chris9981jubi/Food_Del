import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
 
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Error fetching data');
      }
    } catch (error) {
      toast.error('An error occurred while fetching data');
    }
  };

  const removeFood = async (foodId) => {
   
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success('Item removed successfully');
        await fetchList();
      } else {
        toast.error('Error removing item');
      }
    
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All item lists</p>
      <div className='list-table'>
        <div className='list-table-header'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        <div className='list-table-body'>
          {list.map((item) => (
            <div key={item._id} className='list-table-row'>
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>Rs {item.price}</p>
              <button onClick={() => removeFood(item._id)}>x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
