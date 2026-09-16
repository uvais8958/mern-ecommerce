import { useState,useEffect } from "react";
import api from "../api/axios";

export default function Cart(){
    const userId=localStorage.getItem("userId");
    const [cart,setCart]=useState(null);

    //load cart data
    const loadCart=async()=>{
        if(!userId) return;
        const res=await api.get(`/cart/${userId}`);
        setCart(res.data);
    }
    useEffect(()=>{
       loadCart();
    },[])


    const removeItem=async (productId)=>{
    await api.post(`/cart/remove`,{userId,productId});
    loadCart();
    window.dispatchEvent(new Event("cartUpdated"));

}

//updateItem quantity
const updatedQty=async(productId,quantity)=>{
    if(quantity===0){
        await removeItem(productId);
        return;
    }
    await api.post(`/cart/update`,{userId,productId,quantity});
    loadCart();
    window.dispatchEvent(new Event ("cartUpdated"));
}

       if(!cart){
        return <div>Loading.....</div>
       }

       const total=cart.itmes.reduce((sum,item)=>sum+item.productId.price * item.quantity,0);
       
       
       return(
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
              
              {
                cart.items.length === 0 ?(
              
                    <div>Your cart is empty</div>         
                ):(
                  <div className="scpece-y-4">
                    {
                        <div>
                            {
                                cart.items.map((item)=>{
                                    <div 
                                    key={item.productId._id}
                                    className="flex items-center justify-between p-4 border rounded">
                                        <div className="flex items-center gap-4">
                                            <img 
                                            src={item.productId.image}
                                            alt={item.productId.title}
                                            />
                                            <div>
                                                <h2 className="text-lg font-semibold">{item.productId.title}</h2>
                                                <p className="text-gray-600">${item.productId.price.toFixed(2)}</p>
                                                </div>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <button onClick={()=>updatedQty(item.productId._id,item.quantity -1)}
                                                        className="px-2 py-1 bg-gray-400 rounded">
                                                            -
                                                    </button>
                                                    </div>
                                                    <span>{item.quantity}</span>

                                                    <div className="flex items-center gap-2">
                                                    <button onClick={()=>updatedQty(item.productId._id,item.quantity +1)}
                                                        className="px-2 py-1 bg-gray-400 rounded">
                                                            +
                                                    </button>
                                                    </div>

                                                    <div>
                                                        <p className="font-semibold">
                                                            ${(item.productId.price * item.quantity).toFixed(2)}
                                                        </p>
                                            
                                                    </div>
                                                        <button 
                                                        onClick={()=>removeItem(item.productId._id)}
                                                        className="text-red-500">
                                                            Remove
                                                        </button>
                                                </div>

                                })}
                                <div className="text-right mt-4">
                                    <h2 className="text-xl font-bold">
                                        Total: ${total.toFixed(2)}
                                    </h2>
                                </div>
                        </div>
                    }
                  </div>
                )
              }
           
        </div>

       )


}

