import {createBrowserRouter,Outlet,RouterProvider} from "react-router";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetails from './pages/ProductDetails';
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import ProductList from "./admin/ProductList";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart.jsx";
import CheckoutAddress from "./pages/CheckoutAddress.jsx";
import Chackout from "./pages/Chackout.jsx";


function Layout(){
  return(<>
  <Navbar/>
  <Outlet/>
  </>
  )
}
const router=createBrowserRouter([
{
  element:<Layout/>,
  children:[
   {path:"/",element:<Home/>},
   {path:"/login",element:<Login/>},
   {path:"/signup",element:<Signup/>},
   {path:"/products/:id",element:<ProductDetails/>},
   { path : "/cart", element: <Cart />},


  {path:"/admin/products",element:<ProductList/>},
  {path:"/admin/products/add",element:<AddProduct/>},
  {path:"/admin/products/update/:id",element:<EditProduct/>},
  {path:"/checkout-address",element:<CheckoutAddress/>},
  {path:"/checkout",element:<Chackout/>}
  ]
}
]);

export default function App(){
  return <RouterProvider router={router}/>;
}
