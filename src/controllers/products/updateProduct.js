import Product from "../../models/product";
import Brand from "../../models/brand";
import ProductMessage from "../../messages/productMessages";

//Controller used to update a product, and it's brand if necessary
export const updateProduct = async (req, res) => {
  const response = new ProductMessage("update"); //message object with initial message update
  if (req.query.id) {
    try {
      const foundProduct = await Product.findById(req.query.id);
      const foundBrand = await Brand.exists({
        brand_name: req.query.brand_name,
      });
      const updatedProduct = {
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        image_url: req.body.image_url,
        price: req.body.price,
      };
      const modifyBrand = await Brand.findById(foundBrand); //find a matching brand with the new name
      foundProduct.brand = modifyBrand; //and modifies the one in the product
      await foundProduct.updateOne(updatedProduct);
      const productSaved = await foundProduct.save();
      if (productSaved) {
        response.setStatusMessage(200);
        response.setData(productSaved);
      } else {
        response.setStatusMessage(404);
      }
    } catch (error) {
      error.kind === "ObjectId" //returns different message for wrong id format and general server errors
        ? response.setStatusMessage(400)
        : response.setStatusMessage(500);
    }
  } else {
    response.setStatusMessage(406);
  }
  res.json(response); //returns the entire object with the stored status and data
};
