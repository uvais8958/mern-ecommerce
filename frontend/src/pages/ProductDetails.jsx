import { useParams } from "react-router";
import api from "../api/axios";
import { useEffect,useState } from "react";

 export default function ProductDetails () {
  
  const {id}=useParams();
  const [product,setProducts]=useState(null);


  const loadProduct=async()=>{
    const res=await api.get("/products");

    const p=res.data.find((item)=>item._id ===id);
    setProducts(p);
  }
  
  useEffect(()=>{
    loadProduct();
  },[]);

  
  if(!product){
    return <div>Loading...</div>
  
  }


  return (
    <div className=" flex flex-col items-center justify-center   p-6 mx-w-3xl mx-auto">
      

      <img src={product.image}
       alt={product.title} 
       className="w-40 h-40 object-contain bg-white rounded max-auto" />

      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700 mt-2">${product.description}</p>
      <p className="text-xl font-semibold mt-4">${product.price}</p>
       
       
        <button className=" px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add to cart
          </button>            

    </div>
  )
}


