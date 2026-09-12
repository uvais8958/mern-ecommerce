import Product from '../models/product.js';


// create a new Product

export const createProduct=async (req,res)=>{
    try{
          const product=await Product.create(req.body);
          res.json({
            message:"Product create successfully",
            product,
          })
    }catch(error){
        res.status(500).json({
            message:"Server error",error
        });
    }
};

// Get all product

export const getProducts=async (req,res)=>{
    try{
       const {search,category}=req.query;
           
       let filter={};

       if(search){
             filter.title= {$regex: search, $options: 'i'};//case insesitive search
           }
                
           if(category){
            filter.category=category;
           }

        const products=await Product.find(filter).sort({createdAt: -1});
        res.json(products);

    }catch(error){
        res.status(500).json({message:"Server error",error  });
    }
}



// Updated a product

export const updateProduct=async (req,res)=>{
    try{
        const updated=await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.json({
            message:`Product updated successfully`,
            updated,
        })
    }catch(error){
     res.status(500).json({
        message:"Server error",error
     });
    }
    
};

// delete Product

export const deleteProduct=async (req,res)=>{
    try{
          await Product.findByIdAndDelete(req.params.id);
          res.json({message:`Product deleted successfully..`});
    }catch(error){
        res.status(500).json({
            message:"Server error",error
        });
    }
}