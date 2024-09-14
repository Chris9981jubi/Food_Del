import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : {};
    });
    const url ="https://food-delivery-back-lr81.onrender.com"
    const [token,setToken]=useState("");
    const[food_list, setFoodlist]= useState([])

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    
    const addToCart =async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
            
        }));
        if(token){
            await axios.post(url+ "/api/cart/add",{itemId},{headers:{token}})

        }
    };

    const removeFromCart = async(itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0
        }));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    };

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                } else {
                    console.error(`Item with ID ${item} not found in food_list`);
                }
            }
        }
        return totalAmount;
    };
    const fetchFoodlist = async()=>{
        const response = await axios.get(url+"/api/food/list")
        setFoodlist(response.data.data)
    }
    const loadCartData= async(token)=>{
        const response= await axios.post(url + "/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData);
    }
    useEffect(()=>{
        
        async function loadData(){
            await fetchFoodlist()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
