import Product from "../../models/product";
import Brand from "../../models/brand";
import ProductMessage from "../../messages/productMessages";

//Controller used to create a new product
export const createProduct = async (req, res) => {
  const response = new ProductMessage("create"); //message object with initial message create

  if (!req.body.name || !req.body.price || !req.body.brand.brand_name) {
    response.setStatusMessage(406);
  }
  try {
    const newProduct = new Product({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      image_url: req.body.image_url ? req.body.image_url : "",
      price: req.body.price,
    });
    const foundBrand = await Brand.exists({ 
      brand_name: req.body.brand.brand_name,
    });
    const addBrand = await Brand.findById(foundBrand);
    newProduct.brand = addBrand;
    const productSaved = await newProduct.save();
    response.setStatusMessage(200);
    response.setData(productSaved);
  } catch (error) {
    response.setStatusMessage(500);
  }
  res.json(response); //returns the entire object with the stored status and data
};
