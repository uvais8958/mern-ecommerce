import { useEffect,useState } from "react";
import api from "../api/axios";
import { Link } from "react-router";


export default function Home  () {

  const [products,setProducts]=useState([]);
  const [search,setSearch]=useState("");
  const [category,setCategory]=useState("");

  const loadProducts=async()=>{
    try{
      const res=await api.get(`/products?search=${search}&category=${category}`);
      setProducts(res.data);
    }catch(error){
      console.error("products is not found",error);
    }
  }

  useEffect(()=>{
    loadProducts();

  },[search,category]);

  const addToCart= async(productId)=>{
    const userId=localStorage.getItem("userId");
    if(!userId){
      alert("Please log in to add items to your cart.");
      return;
    }
    const res= await api.post(`/cart/add`,{userId,productId});
    const total=res.data.cart.items.reduce(
      (sum,item)=>sum+item.productId.price * item.quantity,0
    );
    localStorage.setItem("cartCount",total);
    window.dispatchEvent(new Event("cartUpdated"));
  }
  
  return (
    <div className="p-6">
      <div className="mb-4 flex gap-3">
      
      {/* Search */}
       <input 
       placeholder="Search Products..."
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
       className="border px-3 py-2 rounded w-1/2"
       />

       {/* category filter */}

       <select 
       value={category}
       onChange={(e)=>setCategory(e.target.value)}
       className="border px-3 py-2 rounded">
        <option value="">All Category</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Tablet">Tablets</option>
        <option value="short">Man-shirt</option>
       </select>

           </div>


       {/* Product Grid  */}
       
       <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {
          products.map((product)=>(
            <Link 
            key={product._id}
            to={`/products/${product._id}`}
            className="border p-3 rounded shadow hover:shadow-lg transition"
            >
              <img src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain bg-white rounded"/>

              <h2 className="mt-2 font-semibold text-lg">{product.title}</h2>

              <p className="text-gray-600">${product.price}</p>
 </Link>
          
          ))
           
          }
            
            <button onClick={()=>addToCart(product._id)}
              className="mt-2 w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-800">
              Add To Cart
            </button>
       
       </div>    
              

     </div>
  )
}


