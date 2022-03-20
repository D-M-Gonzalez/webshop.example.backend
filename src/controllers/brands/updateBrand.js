import Brand from "../../models/brand";
import BrandMessage from "../../messages/brandMessages";

//Controller used to update a brand
export const updateBrand = async (req, res) => {
  const response = new BrandMessage("update"); //message object with initial message update
  if (req.params.id) {
    try {
      const doc = await Brand.findByIdAndUpdate(req.params.id, req.body);
      if (doc) {
        response.setStatusMessage(200);
        response.setData(doc);
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
