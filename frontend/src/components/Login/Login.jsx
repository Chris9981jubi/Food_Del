import React, { useContext, useState,  } from 'react'
import "./Login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../context/storeContext';
import axios from "axios"

const Login = ({setShowLogin}) => {
    const{url,setToken}=useContext(StoreContext)

    const [currState, setCurrState] = useState("Login");
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))

    }
    const onLogin = async(event)=>{
        event.preventDefault()
        let newUrl = url;
        if(currState==="Login"){
            newUrl+="/api/user/login"
        }
        else{
            newUrl +="/api/user/register"
        }
        const response = await axios.post(newUrl, data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
            
        }
        else{
            alert(response.data.message)
        }

    }
   
    return (
        <div className='login'>
            <form  onSubmit={onLogin}className='login-container'>
                <FontAwesomeIcon
                    icon={faTimes}
                    className="close-icon"
                    onClick={() => setShowLogin(false)}
                />
                <div className='login-title'>
                    <h2>{currState}</h2>
                </div>
                <div className="login-inputs">
                    {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder="Name" required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder="Email" required />
                    <input name="password" onChange={onChangeHandler} value={data.password} type='password' placeholder="Password" required />
                </div>
                <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className='login-condition'>
                    <input type='checkbox' required />
                    <p>By continuing, you agree to our terms & policies</p>
                </div>
                {currState === "Login" ?
                    <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                    
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Login;
