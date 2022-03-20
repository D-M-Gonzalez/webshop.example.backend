//Object to handle server responses on Products
export default class ProductMessage {
    constructor (message){
        this.status = 0;
        this.message = message;
        this.data = new Object();
        }
    setStatusMessage(code){ //Setups a generic message depending on the status passed
        this.status = code
        this.status === 200 && (this.message = `Product ${this.message}d successfully`);
        this.status === 400 && (this.message = `Invalid parameters when doing ${this.message} product`);
        this.status === 406 && (this.message = `Missing parameters to ${this.message} product`);
        this.status === 404 && (this.message = `Product not found`);
        this.status === 401 && (this.message = `Invalid credentials to ${this.message} product to database`);
        this.status === 500 && (this.message = `Unexpected error when doing ${this.message} product`);
        this.status === 504 && (this.message = `Gateway Time-Out when doing ${this.message} product`);
    }
    setData(docData){ //Stores the document data
        this.data.id = docData.id;
        this.data.name = docData.name;
        this.data.category = docData.category;
        this.data.description = docData.description;
        this.data.image_url = docData.image_url;
        this.data.price = docData.price;
        this.data.brand = {
            _id: docData.brand.id,
            brand_name: docData.brand.brand_name,
            logo_url: docData.brand.logo_url,
        }
    }
}
