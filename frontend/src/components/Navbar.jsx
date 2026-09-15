import {Link,useNavigate} from 'react-router';
import { useState,useEffect } from 'react';
import { FaAppStoreIos, FaShoppingCart } from "react-icons/fa";
import api from "../api/axios";

export default function Navbar  ()  {
  const navigate=useNavigate();
  const [cartCount,setCartCount]=useState(0);
  const userId=localStorage.getItem("userId");
 
 
  useEffect(()=>{
    const loadCart=async()=>{
        if(!userId) return setCartCount(0);

        const res=await api.get(`/cart${userId}`);
        const total=res.data.items.reduce(
            (sum,item)=>sum+item.quantity,0);
            setCartCount(total);
    }  
    loadCart();

    window.addEventListener("cartUpdated",loadCart);
    return()=>{
        window.removeEventListener("cartUpdated",loadCart);
    }
},
[userId]);

  const logout=()=>{
     localStorage.clear();
     setCartCount(0);
     navigate("/login");
  }
  
    return (
    <nav  className='flex justify-between p-4 shadow'>
        <Link to="/" className='font-bold text-xl '>Uvais Store</Link>
        <div className='flex gap-4 items-center'>
            <Link to="/cart" className='related text-xl'>
            {
             FaShoppingCart   
            }

            {
                cartCount>0&&(
                    <span className='absolute -top-2 right-2 bg-red-600 text-white rounded '>
                        {cartCount}
                    </span>
                )
            }
            </Link>

            {
                !userId ?(
                    <>
                    <Link to="/login" className='text-lg'>Login</Link>
                    <link to="signup" className='text-lg'>Signup</link>
                    </>
                ):(
                    <button onClick={logout} className='text-lg'>Logout</button>
                )
            }

        </div>
    </nav>
  )
}


