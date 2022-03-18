import Product from "../models/Product"

export const updateProduct = async(req,res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body)
        res.json({message: 'Task was updated successfully'})
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}