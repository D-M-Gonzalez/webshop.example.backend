import { getPagination } from "../../libs/getPagination";
import BrandMessage from "../../messages/brandMessages";
import Brand from "../../models/brand";

//Controller used to return the entire brands list
export const findAllBrands = async (req, res) => {
  let response = [];
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);
    const list = await Brand.paginate({}, { offset, limit });
    response = list.docs.map((el) => {
      const doc = new BrandMessage("locate"); //message object for every index with initial message locate
      doc.setStatusMessage(200);
      doc.setData(el);
      return doc;
    });
    res.json(response); //returns the entire object array with the stored status and data
  } catch (error) {
    const singleResponse = new BrandMessage("locate"); //message object with initial message locate
    singleResponse.setStatusMessage(500);
    res.json(singleResponse); //returns the entire object with the stored status and data
  }
};
