import BrandMessage from "../../messages/brandMessages";
import Brand from "../../models/brand";

//Controller used to create a new brand
export const createBrand = async (req, res) => {
  const response = new BrandMessage("create"); //message object with inital message create
  if (!req.body.brand_name) {
    response.setStatusMessage(406);
  }
  try {
    const newBrand = new Brand({
      brand_name: req.body.brand_name,
      logo_url: req.body.logo_url,
    });
    const brandSaved = await newBrand.save();
    response.setStatusMessage(200);
    response.setData(brandSaved);
  } catch (error) {
    response.setStatusMessage(500);
  }
  res.json(response); //returns the entire object with the stored status and data
};
