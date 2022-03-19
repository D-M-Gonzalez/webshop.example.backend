import Product from "../../models/Product"
import Brand from "../../models/Brand"

export const deleteProduct = async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.json({
            message: `Product were deleted successfully`
        })
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}