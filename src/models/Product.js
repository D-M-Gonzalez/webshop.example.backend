import {Schema,model} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import brandsSchema from "./Brand";

const productsSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,       
    },
    image_url: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        required: true,
    },
    child: brandsSchema
},{
    versionKey: false,
    timestamps: true
})

productsSchema.plugin(mongoosePaginate);
export default model('Product',productsSchema);