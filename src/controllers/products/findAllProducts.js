import Product from "../../models/product";
import { getPagination } from "../../libs/getPagination";
import ProductMessage from "../../messages/productMessages";

//Controller used to return all the products
export const findAllProducts = async (req, res) => {
  let response = [];
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);
    const list = await Product.paginate({}, { offset, limit });
    response = list.docs.map((el) => {
      const doc = new ProductMessage("locate"); //message object for every index with initial message locate
      doc.setStatusMessage(200);
      doc.setData(el);
      return doc;
    });
    res.json(response); //returns the entire object array with the stored status and data
  } catch (error) {
    const singleResponse = new ProductMessage("locate"); //message object with inital message locate
    singleResponse.setStatusMessage(500);
    res.json(singleResponse); //returns the entire object with the stored status and data
  }
};
