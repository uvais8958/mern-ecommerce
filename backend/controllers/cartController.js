import Cart from "../models/cart.js";


// Add to cart itmes
export const addToCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({
                userId,
                items: [
                    {
                        productId,
                        quantity: 1
                    }
                ]
            });
        } else {

            const item = cart.items.find(
                i => i.productId.toString() === productId
            );

            if (item) {
                item.quantity += 1;
            } else {
                cart.items.push({
                    productId,
                    quantity: 1
                });
            }
        }

        await cart.save();

        res.json({
            message: "Item added to cart",
            cart
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};






// Remove item from cart
// export const removeItem=async(req,res)=>{
//     try{
//         const {userId,productId}=req.body;
//         const cart=await Cart.findOne({userId});
//     if(!cart){
//         return res.status(404),json({message:"Cart not found"})
//     }
// cart.items=cart.items.filter(
//     i=i.productId.toString()!=productId
// );
// await cart.save();
// res.json({
//     message:"Item removed from cart..",
//     cart
// });


//     }catch(error){
//         res.status(500).json({message:"server error",error});
//     }
// }




// Update cart item quantity in cart

// export const updateQuantity=async(req,res)=>{
//     try{
//            const {userId,productId,quantity}=req.body;
//            const cart=await Cart.findOne({userId});

//            if(!cart){
//             return res.status(404).json({message:"Cart not found..!"});
//            }
//            const item=cart.items.find(i=>i.productId.toString()===productId);
//            if(!item){
//             return res.status(404).json({message:"Item not found in cart"});
//            }

//            item.quantity=quantity;
//            await cart.save();
//            res.json({
//             message:"Item quantity updated",
//             cart
//            });
//     }catch(error){
//       res.status(500).json({message:"Server error",error})
//     }
// }


// Get cart by userId


export const removeItem = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        cart.items = cart.items.filter(
            i => i.productId.toString() !== productId.toString()
        );

        await cart.save();

        res.json({
            message: "Item removed from cart..",
            cart
        });

    } catch (error) {
        console.log("REMOVE ITEM ERROR:", error);

        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};
export const updateQuantity = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found..!"
            });
        }

        const item = cart.items.find(
            i => i.productId.toString() === productId.toString()
        );

        if (!item) {
            return res.status(404).json({
                message: "Item not found in cart"
            });
        }

        item.quantity = quantity;

        await cart.save();

        res.json({
            message: "Item quantity updated",
            cart
        });

    } catch (error) {
        console.log("UPDATE QUANTITY ERROR:", error);

        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};



export const getCart=async(req,res)=>{
  try{
  const {userId}=req.params;
    const cart=await Cart.find({userId}).populate('items.productId');
    res.json(cart);
  }catch(error){
    res.statu(500).json({message:"Server error",error});
  }
}