import React, { useState } from 'react'
import "./Add.css"
import axios from "axios"
import { toast } from 'react-toastify'

const Add = () => {
    const url = "https://food-delivery-back-lr81.onrender.com"
    const [image, setImage] = useState(null)
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Burgers"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category) // Fixed this line
        formData.append("image", image)

        try {
            const response = await axios.post(`${url}/api/food/add`, formData)
            if (response.data.success) {
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Burgers"
                })
                setImage(null)
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error('An error occurred while adding the item')
        }
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex col'>
                    <p>UPLOAD IMAGE</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : ""} alt='' />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Item name</p>
                    <input
                        onChange={onChangeHandler}
                        value={data.name}
                        type='text'
                        name='name'
                        placeholder='type here'
                        required
                    />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write your content here'
                        required
                    />
                </div>
                <div className="add-category-price">
                    <div className='add-category flex-col'>
                        <p>Product category</p>
                        <select name='category' value={data.category} onChange={onChangeHandler}>
                            <option value="Burgers">Burgers</option>
                            <option value="Pizzas">Pizzas</option>
                            <option value="Cakes">Cakes</option>
                            <option value="Waffles">Waffles</option>
                            <option value="Pastas">Pastas</option>
                            <option value="Noodles">Noodles</option>
                            <option value="Chicken-Fries">Chicken-Fries</option>
                            <option value="Pancakes">Pancakes</option>
                        </select>
                    </div>
                    <div className='add-price flex col'>
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder='Rs199' />
                    </div>
                </div>
                <button type="submit" className='add-btn'>ADD</button>
            </form>
        </div>
    )
}

export default Add
