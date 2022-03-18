import Product from "../models/Product"

export const createProduct = async (req,res)=>{

    if(!req.body.name || !req.body.price || !req.body.brand.brand_name){
        return res.status(400).send({message: 'Content cannot be empty'})
    }

    try {
        const newProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            image_url: req.body.image_url ? req.body.image_url : "",
            price: req.body.price,
            child: {
                brand_name: req.body.brand.brand_name,
                logo_url: req.body.brand.logo_url
            }
        })
        const productSaved = await newProduct.save();
        res.json(productSaved)
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}