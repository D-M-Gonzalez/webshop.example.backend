import BrandMessage from "../../messages/brandMessages";
import Brand from "../../models/brand";

//Controller used to delete a brand
export const deleteBrand = async (req, res) => {
  const response = new BrandMessage("delete"); //message object with initial message delete
  if (req.params.id) {
    try {
      const doc = await Brand.findByIdAndDelete(req.params.id);
      if (doc) {
        response.setStatusMessage(200);
        response.setData(doc);
      } else {
        response.setStatusMessage(404);
      }
    } catch (error) {
      error.kind === "ObjectId"
        ? response.setStatusMessage(400)
        : response.setStatusMessage(500);
    }
  } else {
    response.setStatusMessage(406);
  }
  res.json(response); //returns the entire object with the stored status and data
};
