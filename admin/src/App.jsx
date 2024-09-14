import React from 'react';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar.jsx';
import { Routes, Route } from "react-router-dom";
import Add from "./Pages/Add/Add.jsx";
import List from "./Pages/List/List.jsx";
import Order from './Pages/Order/Order.jsx';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url="https://food-delivery-back-lr81.onrender.com"
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Order url={url} />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default App;
