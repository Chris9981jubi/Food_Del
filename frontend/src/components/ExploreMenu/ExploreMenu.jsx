import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets.js'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Whether you're in the mood for a quick snack or a gourmet meal, we've got you covered. Our app connects you with the best local eateries, offering a wide variety of cuisines to satisfy every taste. </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index)=>{
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All": item.menu_name)} key={(index)} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""}src={item.menu_image} alt=""></img>
              <p>{item.menu_name}</p>
              </div>
          )
        })}
      </div>
      <hr />
      
    </div>
  )
}

export default ExploreMenu
