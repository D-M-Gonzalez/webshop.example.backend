//Object to handle server responses on Brands
export default class BrandMessage {
    constructor (message){
        this.status = 0;
        this.message = message;
        this.data = new Object();
        }
    setStatusMessage(code){ //Setups a generic message depending on the status passed
        this.status = code
        this.status === 200 && (this.message = `Brand ${this.message}d successfully`);
        this.status === 400 && (this.message = `Invalid parameters when doing ${this.message} Brand`);
        this.status === 406 && (this.message = `Missing parameters to ${this.message} Brand`);
        this.status === 404 && (this.message = `Brand not found`);
        this.status === 401 && (this.message = `Invalid credentials to ${this.message} Brand to database`);
        this.status === 500 && (this.message = `Unexpected error when doing ${this.message} Brand`);
        this.status === 504 && (this.message = `Gateway Time-Out when doing ${this.message} Brand`);
    }
    setData(docData){ //Stores the document data
        this.data.id = docData.id;
        this.data.brand_name = docData.brand_name;
        this.data.logo_url = docData.logo_url;
    }
}